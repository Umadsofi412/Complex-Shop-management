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

router.put("/:id", protect, async (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;
  try {
    const shop = await Shop.findById(id);
    if (shop) {
      shop.name = name || shop.name;
      shop.description = description || shop.description;
      shop.price = price || shop.price;
      const updatedShop = await shop.save();
      res.json(updatedShop);
    } else {
      res.status(404).json({ message: "Shop not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const shop = await Shop.findById(req.params.id);
    if (!shop) {
      res.status(404).json({ message: "Shop not found" });
    } 
    await shop.remove();
    res.json({ message: "Shop removed" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/buy/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const shop = await Shop.findById(id);
    if (shop) {
      shop.owner = req.user._id;
      await shop.save();
      res.json({ message: "Shop purchased successfully" });
    } else {
      res.status(404).json({ message: "Shop not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
