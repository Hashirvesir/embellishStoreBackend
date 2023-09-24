
module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/api/api/orders',        
        handler: 'order.create',
        
      },
    ],
  };