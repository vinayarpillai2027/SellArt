const artworkModel = require('../models/artworkModel');

exports.getShop = (req, res) => {
  const artworks = artworkModel.getAllArtworks();
  res.render('pages/shop', {
    title: 'Gallery | Aurora Collection',
    artworks
  });
};

exports.getProductDetail = (req, res) => {
  const artwork = artworkModel.getArtworkById(req.params.id);

  if (!artwork) {
    return res.status(404).render('pages/404', {
      title: 'Artwork Not Found | Aurora Gallery'
    });
  }

  res.render('pages/product-detail', {
    title: `${artwork.title} by ${artwork.artist} | Aurora Gallery`,
    artwork
  });
};

