const jwt = require('jsonwebtoken')
exports.logger = async (req,res, next)=>{
    let token = null;
    console.log(req.cookies)
    if(!req.cookies['token']){
        res.status(400).json({
            message: 'ta newterne vv',
        });
    }
    token = req.cookies['token']
    let client = jwt.verify(token, 'erhmee123')
    req.client = client
    next()
}