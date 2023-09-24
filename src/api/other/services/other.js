'use strict';

/**
 * other service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::other.other');
