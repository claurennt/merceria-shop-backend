const objHasEmptyKey = (obj) => {
  for (const prop in obj) {
    return obj[prop] === '' || (obj[prop] = null) ? true : false;
  }
};
module.exports = objHasEmptyKey;
