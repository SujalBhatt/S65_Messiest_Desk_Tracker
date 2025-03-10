const express = require("express");
const router = express.Router();


router.get("/desk", async (req, res) => {
    try {
        const desks = await Desk.find();
        if (!desks) {
            return res.status(400).json({ message: "No desks found" });
        }
        return res.json(desks);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

router.post("/desk", async (req, res) => {
    try {
        const desk = req.body;
        const newDesk = new Desk(desk);
        await newDesk.save();
        return res.status(201).json(newDesk); 
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

router.put("/desk/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const desk = req.body;
        const updatedDesk = await Desk.findByIdAndUpdate(id, desk, { new: true });
        if (!updatedDesk) {
            return res.status(400).json({ message: "Desk not found" });
        }
        return res.status(200).json(updatedDesk);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

router.delete("/desk/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const deletedDesk = await Desk.findByIdAndDelete(id); 
        if (!deletedDesk) {
            return res.status(400).json({ message: "Desk not found" });
        }
        return res.status(200).json(deletedDesk); 
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

module.exports = router;