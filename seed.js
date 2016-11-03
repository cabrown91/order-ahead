// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

var itemList =[];
itemList.push({
              itemName: 'TURKEY BLT',
              itemPrice: 12,
              itemImage: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/ee/ee/ae/turkey-blt-best-sandwich.jpg',
              itemDescription: 'deli turkey, bacon, shredded lettuce, tomatoes, swiss cheese, garlic aioli, sweet deli roll '
            });
itemList.push({
              itemName: 'ITALIAN SUB',
              itemPrice: 12,
              itemImage: 'http://hiddenboston.com/images/LambertsItalianSub.jpg',
              itemDescription: 'coppa, salami, prosciutto, pepperoncini, shredded romaine, red onions, provolone cheese, garlic aioli, red wine vinaigrette, sweet deli roll'
            });
// itemList.push({
//               itemName: 'TUNA SANDWICH',
//               itemPrice: 12,
//               itemImage: 'http://cookdiary.net/wp-content/uploads/images/Tuna-Salad-Sandwich_10202.jpg',
//               itemDescription: 'albacore tuna, avocado, mixed greens, pickles, kaiser roll'
//             });
// itemList.push({
//               itemName: 'DILL EGG SALAD SANDWICH',
//               itemPrice: 12,
//               itemImage: 'http://2.bp.blogspot.com/-Llrox3O5Cp4/UZ4K7LIQ7KI/AAAAAAAAOBs/zArLxfyFGwU/s1600/tofu+salad+sandwich+close.jpg',
//               itemDescription: 'radish sprouts, roasted pepper spread, swiss cheese, crispy onion, kaiser roll'
//             });
itemList.push({
              itemName: 'CARVING: HERBED PORK',
              itemPrice: 12,
              itemImage: 'http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2006/7/18/0/ek0113_pork1.jpg.rend.sni12col.landscape.jpeg',
              itemDescription: 'caesar aioli, shredded romaine, tomatoes, shaved parmesan, bread crumbles, sweet deli roll '
            });
// itemList.push({
//               itemName: 'CHICKEN & BISCUIT SANDWICH',
//               itemPrice: 12,
//               itemImage: 'https://cdn0.vox-cdn.com/uploads/chorus_image/image/50216279/pineapplepearlssandwich.0.0.jpeg',
//               itemDescription: 'fried chicken & biscuit sandwich with slaw, pickles, spicy aioli '
//             });
itemList.push({
              itemName: 'GRILLED VERLASSO SALMON',
              itemPrice: 12,
              itemImage: 'https://lh3.googleusercontent.com/WcvKnfe1EGrAA2Oa6GDqWc86gWmGEezftEbss0tGgyblpPUsN4K9V1UnjfQJnSRZRjl7N_HjMZS3eyO8MMMLLQ=s320-c-e365',
              itemDescription: 'Served over a bed of seasoned arugula or cous cous tossed lightly in olive oil'
            });
itemList.push({
              itemName: 'CRISPY TACOS',
              itemPrice: 12,
              itemImage: 'http://ohmyveggies.com/wp-content/uploads/2013/02/tempeh_tacos_recipe.jpg',
              itemDescription: 'seitan, lettuce, cheddar, crema, salsa'
            });
itemList.push({
              itemName: 'CHIPOTLE BEEF QUESADILLA',
              itemPrice: 12,
              itemImage: 'http://2.bp.blogspot.com/-Cx6o1XO_Ens/UYaRPLlHUrI/AAAAAAAAR_8/o_wlbIYg2u0/s1600/DSC03210.jpg',
              itemDescription: 'ground beef, cheddar + jack cheese, tomatoes, greens onions, sour cream'
            });
itemList.push({
              itemName: 'BBQ VEGGIE FLAT BREAD',
              itemPrice: 12,
              itemImage: 'https://www.beefobradys.com/images/pizza-bbq-chicken-flatbread.jpg',
              itemDescription: 'cheddar, pepper jack cheese, brussels sprouts, bbq sauce fried shallots '
            });
itemList.push({
              itemName: 'Gourmet French Fries',
              itemPrice: 12,
              itemImage: 'http://grub.gunaxin.com/wp-content/uploads/gallery/french-fries/french-fries-10.jpg',
              itemDescription: 'Dang in dizzle. Break yo neck, yall away habitasse things dictumst. Dope dapibus.'
            });
// itemList.push({
//               itemName: 'ROASTED HOISIN PORK BANH MI',
//               itemPrice: 12,
//               itemImage: 'https://adelaidefoodcentral.files.wordpress.com/2015/08/a01a.jpg',
//               itemDescription: 'daikon radish, jalapenos, cilantro, pickled carrots, wasabi mayo '
//             });


// var cart = {items: []};
// cart.items = itemList;


db.Item.remove({}, function(err, items){
  // db.Cart.remove({}, function(err, carts){

    db.Item.create(itemList, function(err, items){
      if (err) { return console.log('ERROR', err); }
      console.log("all items:", items);
      console.log("created", items.length, "items");
    });

  //   db.Cart.create(cart, function(err, cart) {
  //     if (err) { return console.log('ERROR', err); }
  //     console.log('the cart:', cart);
  //     process.exit();
  //   });
  // });
});
