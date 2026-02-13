const artworkModel = require('../models/artworkModel');

function getCart(req) {
  if (!req.session.cart) {
    req.session.cart = [];
  }
  return req.session.cart;
}

exports.getCart = (req, res) => {
  const cart = getCart(req);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  res.render('pages/cart', {
    title: 'Your Collection | Aurora Gallery',
    cart,
    total
  });
};

exports.addToCart = (req, res) => {
  const { artworkId } = req.body;
  const artwork = artworkModel.getArtworkById(artworkId);

  if (!artwork) {
    return res.redirect('/shop');
  }

  const cart = getCart(req);
  const existing = cart.find(item => item.id === artwork.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: artwork.id,
      title: artwork.title,
      artist: artwork.artist,
      price: artwork.price,
      image: artwork.image,
      quantity: 1
    });
  }

  res.redirect('/cart');
};

exports.removeFromCart = (req, res) => {
  const id = Number(req.params.id);
  const cart = getCart(req);
  const index = cart.findIndex(item => item.id === id);

  if (index !== -1) {
    cart.splice(index, 1);
  }

  res.redirect('/cart');
};

exports.clearCart = (req, res) => {
  req.session.cart = [];
  res.redirect('/cart');
};

