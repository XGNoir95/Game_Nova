const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Game = require("../models/game");
const { authenticateToken } = require("./userAuth");

// Add game -- admin
router.post("/add-game", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const user = await User.findById(id);

    if (!user || user.role !== "admin") {
      return res.status(400).json({ message: "Unauthorized access" });
    }

    const game = new Game({
      url: req.body.url,
      title: req.body.title,
      author: req.body.author,
      price: req.body.price,
      desc: req.body.desc,
      platform: req.body.platform,
    });

    await game.save();
    res.status(200).json({ message: "Game added successfully" });
  } catch (error) {
    console.error("Error adding game:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.put("/update-game", authenticateToken, async (req, res) => {
    try {
      const { gameid } = req.headers;
      await Game.findByIdAndUpdate(gameid, {
        url: req.body.url,
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        desc: req.body.desc,
        platform: req.body.platform,
      });
  
      return res.status(200).json({
        message: "Game updated successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  });
  

router.delete("/delete-game", authenticateToken, async (req, res) => {
    try{
        const {gameid} = req.headers;
        await Game.findByIdAndDelete(gameid);
        return res.status(200).json({message: "Game deleted successfully"

        });
    }catch(error){
        console.log(error);
        return res.status(500).json({message: "Internal Server Error"});
    }
});

//get all games
router.get("/get-all-games",async(req,res)=>{
        try{
            const games = await Game.find().sort({createdAt: -1});
            return res.json({
                status: "Success",
                data: games,
            });
        }catch(error){
            console.log(error);
            return res.status(500).json({message: "Internal Server Error"});
        }
    });

//get recently addded games limit:4
router.get("/get-recent-games", async(req,res)=>{
    try{
        const games = await Game.find().sort({createdAt: -1}).limit(4);
        return res.json({
            status: "Success",
            data: games,
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({message: "Internal Server Error"});
    }
});

//get game by id(get details)
router.get("/get-game-by-id/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const game = await Game.findById(id);
        return res.json({
            status: "Success",
            data: game,
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({message: "Internal Server Error"});
    }
});
module.exports = router;
