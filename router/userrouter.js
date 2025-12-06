const express = require("express");
const router = express.Router();
const db = require("../config/database.js");

// GET - Sadəcə SELECT FROM ilə
router.get("/", async (req, res) => {
  try {
    const news = await db.query('SELECT * FROM "news"')
    res.json(news[0])
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Xəta baş verdi" })
  }
});

// POST - Yeni məlumat əlavə et
router.post("/", async (req, res) => {
  try {
    const { name, content } = req.body
    
    await db.query(
      'INSERT INTO "news" ("name", "content") VALUES (:name, :content)',
      {
        replacements: { name, content },
        type: db.QueryTypes.INSERT
      }
    )
    
    res.status(201).json({ message: "Məlumat əlavə edildi ✅" })
    console.log("Yeni məlumat əlavə edildi");
  } catch (err) {
    console.log("POST Xətası:", err);
    res.status(500).json({ error: err.message })
  }
});

module.exports = router;