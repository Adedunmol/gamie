const User = require("../models/user.model");

const earningXPS = async (req,res) =>{
    try {
        const { username } = req.params;
        const { xpToAward } = req.body; 
    
       
        if (xpToAward <= 0) {
          return res.status(400).send({
            responseCode: "96",
            responseMessage: "Zero XP amount", 
            data: null
           });
        }
    
        // Find the user by username in the database
        const user = await User.findOne({ username });
        if (!user) {
          return res.status(404).send({
            responseCode: "96",
            responseMessage: "User not found", 
            data: null
           });
        }
        user.xp += xpToAward;
    

        await user.save();
        res.status(200).send({
            responseCode: "00",
            responseMessage: " User's XP updated",
            data: { updatedXP: user.xp }
        })
      } catch (error) {
        res.status(500).send({ 
            responseCode: "95",
            responseMessage: "Internal server error",
            data: null
         });
      }
    
}
 
module.exports = earningXPS