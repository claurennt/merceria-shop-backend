//helper fn to check if an object has an empty key
const objHasEmptyKey = (obj) => {
  for (const prop in obj) {
    return obj[prop] === '' || (obj[prop] = null) ? true : false;
  }
};
module.exports = objHasEmptyKey;
