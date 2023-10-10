const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    wallet_address: String,
    password: String
})

userSchema.methods.comparePassword = async function(password) {
    const user = this;

    return bcrypt.compare(password, user.password).catch((e) => false);
}

userSchema.pre('save', async function (next) {
    const user = this;

    if (!user.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    const hashedPwd = await bcrypt.hash(user.password, salt);

    user.password = hashedPwd;

    return next();
})

const User = mongoose.model('User', userSchema);

module.exports = User;