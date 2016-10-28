function index(req, res) {
  res.json({
    message: "Welcome to Order Ahead!",
    documentation_url: "https://github.com/cabrown91/order-ahead",
    base_url: "http://orderahead.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
}

function templates(req, res) {
  var name = req.params.name;
  res.render('templates/' + name);
}









module.exports.index = index;
module.exports.templates = templates;
