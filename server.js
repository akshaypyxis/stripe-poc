const stripe = require('stripe')('add stipe secret key here (eg: sk_1a2b3c...)');
const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.static('public'));

app.use(cors({
  origin: 'http://localhost:3000'
}))

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({

    // WITH PRICE ID (using exisiting product )
    line_items: [
      {
        // Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
        price: 'Add price ID here',
        quantity: 1,
      },
    ],

    // WITH PRICE (no product created)
    // line_items: [
    //   {
    //     price_data: {
    //       currency: 'inr',
    //       product_data: {
    //         name: 'saas',
    //       },
    //       unit_amount: 200000,
    //     },
    //     quantity: 1,
    //   },
    // ],
    payment_method_types: [
      'card',
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/failure',
    // Provide the customer ID
    customer: 'Add customer ID here', 
  });

  res.redirect(303, session.url)
});

// // to create a product

// app.get('/create-product', async (req, res) => {
//   const product = await stripe.products.create({
//     name: 'Test new',
//   });
//   res.json({ product: product });
// })

// // to attach a price to a product

// app.get('/attach-price', async (req, res) => {
//   const price = await stripe.prices.create({
//     unit_amount: 99000,
//     currency: 'usd',
//     product: 'Add product ID here',
//   });
//   res.json({ price: price });
// })

app.listen(4242, () => console.log('Running on port 4242'));