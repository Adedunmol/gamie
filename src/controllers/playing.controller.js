const User = require("../models/user.model");


const playing =  async (req, res) => {
    try {
        const {username} =req.parms;

        const results = Math.random() > 0.5 ? 'win' : 'lose';
     
        let userXP = 0;
        if (results === 'win') {
               userXP =20;
        } else {
                userXP = -5;
        }

        const user = await User.findOne({username})
        if (user) 
        return res.status(200).json({
            responseCode: "00",
            responseMessage: "User is playing",
            data : {
                results: results,
                userXP: userXP,
                updatedUserXP : user.updatedUserXP,
            }
        });

    } catch (error) {
        res.status(500).send({
            responseCode: "95",
            responseMessage:"internal server error"?.replaceAll("\"", ""),
            data: null
        })
        console.log(error)
    }
}

module.exports = playing