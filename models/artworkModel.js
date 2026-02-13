const artworks = [
  {
    id: 1,
    title: 'Aurora Drift',
    artist: 'Lena Kova',
    price: 4200,
    size: '80 x 120 cm',
    medium: 'Oil on canvas',
    image: '/images/aurora-drift.jpg',
    isFeatured: true,
    category: 'Abstract',
    description:
      'A luminous exploration of northern lights in soft gradients and layered texture, evoking the quiet motion of drifting constellations.'
  },
  {
    id: 2,
    title: 'Silent Atelier',
    artist: 'Marco Ives',
    price: 3200,
    size: '70 x 90 cm',
    medium: 'Acrylic on linen',
    image: '/images/silent-atelier.jpg',
    isFeatured: true,
    category: 'Minimalist',
    description:
      'Muted tones and delicate lines sketch the memory of a studio, suspended in a moment of stillness before creation begins.'
  },
  {
    id: 3,
    title: 'Celestial Fragments',
    artist: 'Aya Morin',
    price: 5100,
    size: '90 x 90 cm',
    medium: 'Mixed media',
    image: '/images/celestial-fragments.jpg',
    isFeatured: true,
    category: 'Contemporary',
    description:
      'Hand-applied metallic leaf and ink collide in a mosaic of stardust, capturing the fleeting geometry of a collapsing galaxy.'
  },
  {
    id: 4,
    title: 'Ivory Horizon',
    artist: 'Theo Hart',
    price: 2800,
    size: '60 x 100 cm',
    medium: 'Oil on panel',
    image: '/images/ivory-horizon.jpg',
    isFeatured: false,
    category: 'Landscape',
    description:
      'An ethereal coastline rendered in a soft monochrome palette, where sky and sea dissolve into a single whisper of light.'
  },
  {
    id: 5,
    title: 'Porcelain Echoes',
    artist: 'Noa Rhee',
    price: 1900,
    size: '50 x 70 cm',
    medium: 'Ink on cotton paper',
    image: '/images/porcelain-echoes.jpg',
    isFeatured: false,
    category: 'Ink',
    description:
      'Fine ink washes and negative space form a quiet, porcelain-like landscape that feels at once intimate and infinite.'
  },
  {
    id: 6,
    title: 'Chromatic Reverie',
    artist: 'Isla Perrot',
    price: 3600,
    size: '80 x 80 cm',
    medium: 'Acrylic on canvas',
    image: '/images/chromatic-reverie.jpg',
    isFeatured: false,
    category: 'Abstract',
    description:
      'Soft-edged color fields overlap like memories, producing a dreamlike haze that shifts gently as the viewer moves.'
  }
];

function getAllArtworks() {
  return artworks;
}

function getFeaturedArtworks(limit = 3) {
  return artworks.filter(a => a.isFeatured).slice(0, limit);
}

function getArtworkById(id) {
  return artworks.find(a => a.id === Number(id));
}

module.exports = {
  getAllArtworks,
  getFeaturedArtworks,
  getArtworkById
};

