const { getClient } = require("../db/get-client");

const getPosts = async () => {
    const client = await getClient();
    let data = await client.query("SELECT * FROM blogs WHERE published_at IS NOT NULL ORDER BY published_at desc LIMIT 6");
    await client.end();
    return data;
};

const getSinglePost = async (slug) => {
    const client = await getClient();
    let data = await client.query(`SELECT * FROM blogs WHERE slug='${slug}' AND published_at IS NOT NULL`);
    await client.end();
    return data;
};

module.exports.getPosts = getPosts;
module.exports.getSinglePost = getSinglePost;
