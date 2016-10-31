/************
 * DATABASE *
 ************/

var db = require('../models');



// GET /api/albums
function index(req, res) {
  db.Item.find({}, function(err, allItems) {
    res.json(allItems);
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
  show: show
};
