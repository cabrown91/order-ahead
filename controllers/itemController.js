/************
 * DATABASE *
 ************/

var db = require('../models');



// GET /api/items
function index(req, res) {
  db.Item.find({}, function(err, allItems) {
    res.json(allItems);
  });
}

function create(req, res) {
  console.log('body', req.body);

  db.Item.create(req.body, function(err, item){
    if(err) { console.log('error', err); }
    console.log(item);
    res.json(item);
  });
}

function show(req, res) {
  db.Item.findById(req.params.itemId, function(err, foundItem) {
    if(err) { console.log('itemsController.show error', err); }
    console.log('itemsController.show responding with', foundItem);
    res.json(foundItem);
  });
}

function destroy(req, res) {
  db.Item.findOneAndRemove({ _id: req.params.itemId }, function(err, foundItem){
    // note you could send just send 204, but we're sending 200 and the deleted entity
    res.json(foundItem);
  });
}

function update(req, res) {
  console.log('updating with data', req.body);
  db.Items.findById(req.params.itemId, function(err, foundItem){
    if(err) { console.log('itemsController.update error', err); }
    foundItem.itemName = req.body.itemName;
    foundItem.itemPrice = req.body.itemPrice;
    foundItem.itemDescription = req.body.itemDescription;
    foundItem.itemImage = req.body.itemImage;
    foundItem.save(function(err, savedItem) {
      if(err) { console.log('saving altered item failed'); }
      res.json(savedItem);
    });
  });
}







module.exports = {
  index: index,
  show: show,
  create: create,
  destroy: destroy,
  update: update
};
