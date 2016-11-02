var db = require('../models');

function index(req, res) {
  db.Cart.findById(req.params.cartId, function(err, foundCart) {
    console.log('responding with items:', foundCart.items);
    res.json(foundCart.items);
  });
}











function destroy(req, res) {
  db.Cart.findById(req.params.cartId, function(err, foundCart) {
    console.log(foundCart);

    var correctItem = foundCart.items.id(req.params.itemId);
    if (correctItem) {
      correctItem.remove();

      foundCart.save(function(err, saved) {
        console.log('REMOVED', correctItem.itemName, 'FROM', saved.items);
        res.json(correctItem);
      });
    } else {
      res.send(404);
    }
  });
}


































module.exports = {
  index: index,
  destroy: destroy
};
