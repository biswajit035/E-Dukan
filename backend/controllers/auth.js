const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const Buyers = require('../models/Buyer');
const { verifyUser } = require('./verify');
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

const saltRounds = 10

function testing(req, res) {
    res.send("hrllow bro me Biswajit")
}

async function signup(req, res) {
    const { fname, lname, email, password, isAdmin } = req.body;
    try {
        const fu = await Buyers.findOne({ email })
        if (fu) {
            return res.status(409).send({
                "status": "warn", "msg": "User already exists"
            });
        }
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);

        const buyer = await Buyers.create({
            fname, lname, email, password: hash, isAdmin
        })
        const payload = {
            ID: {
                id: buyer.id
            }
        }
        var token = jwt.sign(payload, JWT_SECRET_KEY);

        res.send({
            "status": "success",
            "msg": "Successfully created your account",
            buyer,
            token
        })
    } catch (error) {
        res.status(500).send(error)
    }
}


async function login(req, res) {
    const { email, password } = req.body;
    try {
        const fu = await Buyers.findOne({ email })
        if (!fu) {
            return res.status(409).send({
                "status": "warn",
                "msg": "User does not exists"
            });
        }
        const compPass = bcrypt.compareSync(password, fu.password);
        if (!compPass) {
            return res.status(401).send({
                "status": "warn",
                "msg": "Please try to login with correct credentials"
            });
        }
        const payload = {
            ID: {
                id: fu.id
            }
        }
        // console.log("logging from signin:"+payload.ID.id);

        var token = jwt.sign(payload, JWT_SECRET_KEY);
        res.status(200).send({
            "status": "success",
            "msg": "you have success fully logged in",
            fu,
            token
        })
        // res.send(fu.password)
    } catch (error) {
        res.status(500).send({ error })
    }
}



async function getuser(req, res) {
    verifyUser(req,res,async ()=>{
        // console.log("getuser called "+req.user.id);
        const fu = await Buyers.findOne({ _id:req.user.id }).select('-password')
        res.send(fu);   
    })
}






module.exports = { testing, signup, login ,getuser}