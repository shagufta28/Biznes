const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./models');
require('dotenv').config();
const productRoutes = require('./routes/product.routes');
const customerRoutes = require('./routes/customer.routes');
const companyRoutes = require('./routes/company.routes');
const invoiceRoutes = require('./routes/invoice.routes');
const expenseRoutes = require('./routes/expense.routes');
const exportRoutes = require('./routes/export.routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// DB Sync
db.sequelize.sync().then(() => {
  console.log('Database synced.');
}).catch(err => {
  console.error('Sync error:', err);
});

// Routes (to be added)
app.get('/', (req, res) => {
  res.send('Biznas Backend API Running');
});

app.use('/api/products', productRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/companies', companyRoutes);
app.use('/api/invoices', invoiceRoutes);
app.use('/uploads', express.static('uploads')); // Serve logos
app.use('/api/expenses', expenseRoutes);
app.use('/api/export', exportRoutes);

// 404 handler
app.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
  });
  
  // General error handler
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
