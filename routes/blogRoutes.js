const express = require("express");
const router = express.Router();
const { getPosts, getSinglePost } = require("../models/blog");

router.get("/", async (req, res) => {
    const data = await getPosts();
    res.status(200).json(data.rows);
});

router.get("/:slug", async (req, res) => {
    try {
        const slug = req.params.slug;
        const data = await getSinglePost(slug);
        res.status(200).json(data.rows);
    } catch (error) {
        res.sendStatus(500);
    }
});

module.exports = router;
