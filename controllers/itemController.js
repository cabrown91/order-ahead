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










module.exports = {
  index: index,
  show: show,
  create: create
};
