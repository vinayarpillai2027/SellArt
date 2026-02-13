const artworkModel = require('../models/artworkModel');

exports.getHome = (req, res) => {
  const featured = artworkModel.getFeaturedArtworks(3);
  res.render('pages/home', {
    title: 'Aurora Gallery | Curated Fine Art',
    featured
  });
};

exports.getAbout = (req, res) => {
  res.render('pages/about', {
    title: 'About | Aurora Gallery'
  });
};

exports.getContact = (req, res) => {
  res.render('pages/contact', {
    title: 'Contact | Aurora Gallery',
    submitted: false
  });
};

exports.postContact = (req, res) => {
  const { name, email, message } = req.body;

  // In a real app, we would persist this data or send an email.
  // For this demo we simply re-render with a subtle success message.
  res.render('pages/contact', {
    title: 'Contact | Aurora Gallery',
    submitted: true,
    formData: { name, email, message }
  });
};

