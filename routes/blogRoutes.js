const express = require("express");
const router = express.Router();
const { getPosts, getSinglePost, searchPost } = require("../models/blog");

router.get("/:slug", async (req, res) => {
    try {
        const slug = req.params.slug;
        const data = await getSinglePost(slug);
        res.status(200).json(data.rows);
    } catch (error) {
        res.sendStatus(500);
    }
});

router.post("/search", async (req, res) => {
    try {
        const keyword = req.body.search;
        const page = req.body.hasOwnProperty("page") ? req.body.page : 1;
        const data = await searchPost(keyword);
        const pagination = [];
        if (data.rowCount <= 0) {
            res.status(200).json({ pages: 0, pagination });
        } else {
            for (let i = 0; i < data.rows.length; i += 6) {
                const chunk = data.rows.slice(i, i + 6);
                pagination.push(chunk);
            }
            res.status(200).json({ pages: Math.ceil(data.rows.length / 6), pagination: pagination[page - 1] });
        }
    } catch (error) {
        console.log(error.message);
        res.sendStatus(500);
    }
});

module.exports = router;
