'use strict';

/**
 * strapi-note service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::strapi-note.strapi-note');
