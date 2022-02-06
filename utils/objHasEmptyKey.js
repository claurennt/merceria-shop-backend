//helper fn to check if an object has an empty key
const objHasEmptyKey = (obj) => {
  for (const prop in obj) {
    if (
      obj[prop].length === 0 ||
      obj[prop] === null ||
      obj[prop] === undefined
    ) {
      return true;
    } else return false;
  }
};
module.exports = objHasEmptyKey;
