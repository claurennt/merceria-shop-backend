const { param, body } = require('express-validator');
const validateError = require('./validatorError');

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
  .isLength({ min: 24, max: 24 })
  .withMessage('Param "id"(ObjectId of product) is missing or incomplete.');

const paramsValidationChain = [validateGender, validateCategory, validateError];

//copy and extend the validation chain with the id param validator
const paramsValidationChainWithId = [
  ...paramsValidationChain.slice(0, 1),
  validateId,
  ...paramsValidationChain.slice(1),
];

module.exports = { paramsValidationChain, paramsValidationChainWithId };
