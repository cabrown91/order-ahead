var db = require('../models');

function index(req, res) {
  db.Cart.findById(req.params.cartId, function(err, foundCart) {
    console.log('responding with items:', foundCart.items);
    res.json(foundCart.items);
  });
}

//not sure if this is what I want. I think I should be adding already known items to the cart, not creating new items here.
function create(req, res) {
  db.Cart.findById(req.params.cartId, function(err, foundCart) {
    console.log(req.body);
    var newItem = db.Item.findById(req.params.itemId);
    foundCart.items.put(newItem);
    foundCart.save(function(err, savedCart) {
      console.log('newItem created:', newItem);
      res.json(newItem);
    });
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
  create: create,
  destroy: destroy
};
