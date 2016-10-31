// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

var itemList =[];
itemList.push({
              itemName: 'Gourmet French Fries',
              itemPrice: 12,
              itemImage: 'http://grub.gunaxin.com/wp-content/uploads/gallery/french-fries/french-fries-10.jpg',
              itemDescription: 'Dang in dizzle. Pellentesque mah nizzle rhoncizzle gizzle. Break yo neck, yall away habitasse things dictumst. Dope dapibus. Check out this tellizzle urna, pretium dizzle, mattizzle shizzlin dizzle, eleifend phat, nunc. We gonna chung suscipizzle. Integer semper ma nizzle sizzle purus.'
            });
itemList.push({
              itemName: 'Gourmet French Fries',
              itemPrice: 12,
              itemImage: 'http://grub.gunaxin.com/wp-content/uploads/gallery/french-fries/french-fries-10.jpg',
              itemDescription: 'Dang in dizzle. Pellentesque mah nizzle rhoncizzle gizzle. Break yo neck, yall away habitasse things dictumst. Dope dapibus. Check out this tellizzle urna, pretium dizzle, mattizzle shizzlin dizzle, eleifend phat, nunc. We gonna chung suscipizzle. Integer semper ma nizzle sizzle purus.'
            });
itemList.push({
              itemName: 'Gourmet French Fries',
              itemPrice: 12,
              itemImage: 'http://grub.gunaxin.com/wp-content/uploads/gallery/french-fries/french-fries-10.jpg',
              itemDescription: 'Dang in dizzle. Pellentesque mah nizzle rhoncizzle gizzle. Break yo neck, yall away habitasse things dictumst. Dope dapibus. Check out this tellizzle urna, pretium dizzle, mattizzle shizzlin dizzle, eleifend phat, nunc. We gonna chung suscipizzle. Integer semper ma nizzle sizzle purus.'
            });
itemList.push({
              itemName: 'Gourmet French Fries',
              itemPrice: 12,
              itemImage: 'http://grub.gunaxin.com/wp-content/uploads/gallery/french-fries/french-fries-10.jpg',
              itemDescription: 'Dang in dizzle. Pellentesque mah nizzle rhoncizzle gizzle. Break yo neck, yall away habitasse things dictumst. Dope dapibus. Check out this tellizzle urna, pretium dizzle, mattizzle shizzlin dizzle, eleifend phat, nunc. We gonna chung suscipizzle. Integer semper ma nizzle sizzle purus.'
            });




db.Item.remove({}, function(err, items){

  db.Item.create(itemList, function(err, items){
    if (err) { return console.log('ERROR', err); }
    console.log("all items:", items);
    console.log("created", items.length, "items");
    process.exit();
  });

});
