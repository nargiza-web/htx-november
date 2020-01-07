'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Posts', 'isPublished', {
      type: Sequelize.BOOLEAN
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Posts', 'isPublished')
  }
};
