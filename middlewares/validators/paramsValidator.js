const { param } = require('express-validator');

//validate url params
const validateParams = () => {
  return [
    param('categoria')
      .exists()
      .isIn(['maglie', 'intimo', 'canottiere', 'vestaglie', 'pigiami', 'calze'])
      .withMessage(
        'Param "categoria" must be one of: maglie|intimo|canottiere|vestaglie|pigiami|calze'
      ),

    param('genere')
      .exists()
      .isIn(['uomo', 'donna', 'kids'])
      .withMessage('Param "genere" must be one of: donna|uomo|kids'),
  ];
};
module.exports = validateParams;
