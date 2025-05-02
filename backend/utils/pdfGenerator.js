const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

function generateInvoicePDF(invoiceData, filePath) {
  const doc = new PDFDocument({ margin: 50 });

  doc.pipe(fs.createWriteStream(filePath));

  // Company Logo
  if (invoiceData.company.logoPath) {
    doc.image(invoiceData.company.logoPath, 50, 45, { width: 100 });
  }

  // Company Name and Info
  doc
    .fontSize(20)
    .text(invoiceData.company.name, 200, 50, { align: 'right' })
    .fontSize(10)
    .text(`GST No: ${invoiceData.company.gst}`, { align: 'right' })
    .text(invoiceData.company.address, { align: 'right' });

  doc.moveDown();

  // Customer Info
  doc
    .fontSize(12)
    .text(`Invoice Number: ${invoiceData.invoiceNo}`)
    .text(`Invoice Date: ${invoiceData.date}`)
    .text(`Customer Name: ${invoiceData.customer.name}`)
    .text(`GST No: ${invoiceData.customer.gst}`)
    .text(`Shipping Address: ${invoiceData.customer.address}`)
    .moveDown();

  // Table Header
  doc
    .fontSize(10)
    .text('S/N', 50)
    .text('Product', 80)
    .text('HSN', 180)
    .text('Qty', 240)
    .text('Price', 280)
    .text('Total', 340)
    .text('CGST', 400)
    .text('SGST', 460);

  doc.moveDown();

  // Table Rows
  invoiceData.items.forEach((item, i) => {
    doc
      .text(i + 1, 50)
      .text(item.name, 80)
      .text(item.hsn, 180)
      .text(item.qty, 240)
      .text(item.price, 280)
      .text(item.total, 340)
      .text(`${item.cgst}%`, 400)
      .text(`${item.sgst}%`, 460);
    doc.moveDown();
  });

  doc.moveDown().text(`Transport: ${invoiceData.transport}`);
  doc.text(`Bank Details: ${invoiceData.bankDetails}`);
  doc.text(`Terms: ${invoiceData.terms}`);

  // Grand Total
  doc
    .moveDown()
    .fontSize(14)
    .text(`Grand Total: ₹${invoiceData.total}`, { align: 'right' });

  doc.end();
}

module.exports = generateInvoicePDF;
