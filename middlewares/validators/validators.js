const { param, body } = require('express-validator');

//validate url params
const validateGender = param('genere')
  .exists()
  .isIn(['uomo', 'donna', 'kids'])
  .withMessage('Param "genere" must be one of: donna|uomo|kids');

const validateCategory = param('categoria')
  .exists()
  .isIn(['maglie', 'intimo', 'canottiere', 'vestaglie', 'pigiami', 'calze'])
  .withMessage(
    'Param "categoria" must be one of: maglie|intimo|canottiere|vestaglie|pigiami|calze'
  );

const validateId = param('id')
  .exists()
  .withMessage('Param "id"(ObjectId of product) is required');

module.exports = { validateCategory, validateGender, validateId };
