'use strict';
// import strapi from '@strapi/strapi';

/**
 * order controller
*/

const { createCoreController } = require('@strapi/strapi').factories;

// api/order/controllers/Order.js

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products, 
      name, 
      email,
      phone,
      postalcode,
      address,
      totalAmount,} = ctx.request.body; // Destructure products, customer, and totalAmount from the request body

    try {
      // Create the order in Strapi
      const entry = await strapi.entityService.create('api::order.order', {
        data: {
          products, 
          name, 
          email,
          phone,
          postalcode,
          address,
          totalAmount,

        },

      });

      // Return the created order
      return entry;
    } catch (error) {
      ctx.response.status = 500;
      return { error: { message: "There was a problem creating the order" } };
    }
  },
}));


  
  // ./api/order/controllers/order.js

// module.exports = {
//   create: async (ctx) => {
//     const { request } = ctx;
//     const { body } = request;

//     try {
//       const order = await strapi.services.order.create(body);
//       ctx.send(order);
//     } catch (error) {
//       ctx.throw(400, 'Error creating order', error);
//     }
//   },
// };
// "use strict";

// const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController("api::order.order", ({ strapi }) => ({
//   async create(ctx) {
//     const { products, customer, totalAmount } = ctx.request.body; // Destructure products, customer, and totalAmount from the request body

//     try {
//       // Create the order in Strapi
//       const order = await strapi.service("api::order.order").create({
//         products,
//         customer,
//         totalAmount,
//       });

//       // Return the created order
//       return order;
//     } catch (error) {
//       ctx.response.status = 500;
//       return { error: { message: "There was a problem creating the order" } };
//     }
//   },
// }));

