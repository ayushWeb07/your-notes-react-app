'use strict';

/**
 * strapi-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::strapi-user.strapi-user');
