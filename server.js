const path = require('path');
const express = require('express');
const session = require('express-session');

const pageRoutes = require('./routes/pageRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parsing
app.use(express.urlencoded({ extended: true }));

// Session for cart
app.use(
  session({
    secret: 'fine-art-gallery-secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 } // 1 hour
  })
);

// Inject cart count into all views
app.use((req, res, next) => {
  const cart = req.session.cart || [];
  res.locals.cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  next();
});

// Routes
app.use('/', pageRoutes);
app.use('/shop', productRoutes);
app.use('/cart', cartRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).render('pages/404', {
    title: 'Page Not Found | Aurora Gallery'
  });
});

app.listen(PORT, () => {
  console.log(`Aurora Gallery server running at http://localhost:${PORT}`);
});

