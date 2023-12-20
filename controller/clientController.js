const clientSchema = require('../model/clientModel')
const clientModel = require('../model/clientModel')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.getAllClient = async (req, res)=>{
    try {
        let client = await clientSchema.find()
        res.status(200).json(client)
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.createClient = async (req,res) =>{
    try{
        let client = await clientSchema.create(req.body)
        res.status(200).json(client)
    }catch(error){
        res.status(400).json(error.message)
    }
}

exports.getClient = async (req,res)=>{
    try {
        let client = await clientSchema.findById(req.params.id)
        res.status(200).json(client)
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.deleteClient = async (req,res)=>{
    try {
        let client = await clientSchema.findByIdAndDelete(req.params.id)
        res.status(200).json(client)
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.UpdateClient = async (req, res) => {
    try {
      let client = await clientSchema.findByIdAndUpdate(req.params.id,req.body);
      res.status(200).json(client);
    } catch (error) {
      res.status(400).json(error);
    }
};

exports.login = async(req,res) =>{
    try {
        const {email, password} = req.body
        const verifyEmail = await clientModel.findOne({email:email})
        if(!verifyEmail){
            res.status(400).json({error:"newtreh medeelel buruu baina"})
        }
        const checkPassword = await verifyEmail.checkPassword(password)
        if(!checkPassword){
            res.status(400).json({error: "newtreh medeelel buruu baina"})
        }
        const token = jwt.sign({client:verifyEmail._id, role:verifyEmail.role},"erhmee123", {expiresIn: '1h'})
        res.cookie("token", token).status(200).json({verifyEmail:verifyEmail, jwtToken: token  });
    } catch (error) {
        // res.status(400).json(error);
    }
}
