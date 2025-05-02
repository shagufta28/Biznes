const db = require('../models');
const Invoice = db.Invoice;
const InvoiceItem = db.InvoiceItem;
const generatePDF = require('../utils/pdfGenerator');
const path = require('path');

exports.create = async (req, res) => {
    try {
      const { invoice, items } = req.body;
      const createdInvoice = await Invoice.create(invoice);
  
      for (let item of items) {
        await InvoiceItem.create({ ...item, invoiceId: createdInvoice.id });
  
        // ↓ Decrease stock
        const product = await db.Product.findByPk(item.productId);
        if (product) {
          product.stock = product.stock - item.qty;
          await product.save();
        }
      }
  
      res.json({ invoice: createdInvoice });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  

exports.getAll = async (req, res) => {
  const invoices = await Invoice.findAll({ include: db.InvoiceItem });
  res.json(invoices);
};

exports.downloadPDF = async (req, res) => {
    try {
      const invoiceId = req.params.id;
  
      // Fetch invoice and related data (mock for now)
      const invoiceData = {
        invoiceNo: 'INV001',
        date: new Date().toLocaleDateString(),
        company: {
          name: 'Biznas Pvt Ltd',
          gst: '22ABCDE1234F1Z5',
          address: 'Mumbai, India',
          logoPath: './assets/logo.jpg', // Add a sample logo
        },
        customer: {
          name: 'John Doe',
          gst: '29XYZ9876Z4W2',
          address: 'Bangalore, India',
        },
        items: [
          {
            name: 'Product A',
            hsn: '8471',
            qty: 2,
            price: 500,
            total: 1000,
            cgst: 9,
            sgst: 9,
          },
        ],
        transport: 'XYZ Logistics',
        bankDetails: 'HDFC Bank, A/C: 1234567890, IFSC: HDFC0001234',
        terms: 'Payment due within 30 days',
        total: 1180,
      };
  
      const filePath = path.join(__dirname, `../invoices/invoice-${invoiceId}.pdf`);
  
      // Generate PDF
      generatePDF(invoiceData, filePath);
  
      // Wait for file to be written
      setTimeout(() => {
        res.download(filePath);
      }, 1000);
  
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  
