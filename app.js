const express = require("express");
//const fs = require("fs/promises");

const app = express();
const PORT = 8000;

app.get("/products", async (req, res) => {
    try {
        const platform = req.query.platform;
      //  const result = await fs.readFile("products.json", "utf8");
        result = `{"Xbox": [
      {
        "name": "Game 1",
        "image": "game1.png",
        "description": "Racing Game",
        "price": 10
      },
      {
        "name": "Game 2",
        "image": "game2.png",
        "description": "Puzzle Solver",
        "price": 20
      },
      {
        "name": "Game 3",
        "image": "game3.png",
        "description": "Create your own adventure",
        "price": 30
      }
        ]}`
        const data = await JSON.parse(result);
        const products = data[platform];
        res.json(products);
    } catch (e) {
        console.log(e);
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
