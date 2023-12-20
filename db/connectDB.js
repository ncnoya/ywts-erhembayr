const mongoose = require('mongoose')
const connection = async ()=>{
    try{
        const connect = await mongoose.connect('mongodb+srv://ncnoya:Ncnoya_4455@ncnoya.vyb2pg0.mongodb.net/',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )
    } catch(error){
        throw error;
    }
}
module.exports = connection