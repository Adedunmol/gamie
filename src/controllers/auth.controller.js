const User = require("../models/user.model");
const { registerUserSchema } = require("../schema/auth.schema");
const fetch = require('node-fetch');
const { Keypair } = require('@solana/web3.js');
const { Wallet } = require('@coral-xyz/anchor');


const register = async (req, res) => {

    const { error, value } = registerUserSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: 'username, email amd password needed' });
    }

    const foundUser = await User.findOne({ email: value.email, username: value.username });

    if (foundUser) {
        return res.status(409).json({ message: 'username or email already exists' });
    }

    const keyPair = new Keypair();

    const wallet = new Wallet(keyPair);

    console.log(wallet.toString())

    // const body = {
    //     email: value.email,
    //     chain: 'solana'
    // }

    // const response = await fetch(
    //     `https://staging.crossmint.com/api/v1-alpha1/wallets`,
    //     {
    //       method: 'POST',
    //       headers: {
    //         'X-PROJECT-ID': process.env.PROJECT_ID,
    //         'X-CLIENT-SECRET': process.env.CLIENT_SECRET,
    //         'content-type': 'application/json'
    //       },
    //       body: JSON.stringify(body),
    //     }
    // );

    // const wallet = await response.json();

    const newUser = await User.create({ ...value, wallet_address: wallet.publicKey.toString() });

    return res.status(201).json(newUser);
}

module.exports = {
    register,
}