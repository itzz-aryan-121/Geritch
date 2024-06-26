import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '₹5600',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '₹5000',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '₹4400',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '₹3100',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '₹2600',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '₹999',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '₹899',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '₹799',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '₹699',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '₹599',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    
  },
];

export default { wines, cocktails, awards };
