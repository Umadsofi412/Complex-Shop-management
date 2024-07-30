const express = require("express");
const Shop = require("../models/Shop");
const protect = require("../middleware/authmiddleware");
const admin = require('../middleware/authmiddlewareshop');
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const shops = await Shop.find({});
    res.json(shops);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/", protect, async (req, res) => {
  const { name, description, price } = req.body;
  try {
    const shop = new Shop({ name, description, price });
    const createdShop = await shop.save();
    res.status(201).json(createdShop);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});


router.delete('/:id', async (req, res) => {

  try {
    const shop = await Shop.findByIdAndDelete(req.params.id);
    if (!shop) {
      res.status(404).json({ message: "Shop not found" });
    } 
    res.json({ message: "Shop removed" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.put("/buy/:id", async (req, res) => {
  
  try {
    const shop = await Shop.findById(req.params.id);
    if (!shop) {
       res.status(404).json({ message: "Shop not found" });
     
    }
    if(!shop.isAvailable){
      return res.status(400).send({ message: "Shop is already sold" });
    }
     shop.isAvailable = false;
     await shop.save();
     res.json({ message: "Shop purchased successfully" });

  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
