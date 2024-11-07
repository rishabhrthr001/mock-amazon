const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

router.post('/create', async (req, res) => {
  const { products, totalPrice, status } = req.body;

  const orderId = `ORDER-${Date.now()}`;  

  const newOrder = new Order({
    orderId,
    products,
    totalPrice,
    status: 'Pending',  
  });

  try {
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);  
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving order' });
  }
});

router.get('/:orderId', async (req, res) => {
  try {
    const order = await Order.findOne({ orderId: req.params.orderId });
    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching order details' });
  }
});

module.exports = router;
