'use strict';

/**
 * order service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::order.order');
module.exports = {
    create: async (orderData) => {
      return await strapi.query('order').create(orderData);
    },
  };