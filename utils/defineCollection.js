const capitalizeFirstLetter = require('../utils/capitalizeFirstLetter');

const defineCollection = (categoryParam, collectionsObj) => {
  //capitalize the first letter of the category for the exact matching of the computer property
  categoryParam = capitalizeFirstLetter(categoryParam);

  //create the collections based on the computed property of the collection object matching the url param
  const Collection = collectionsObj[categoryParam];

  return Collection;
};

module.exports = defineCollection;
