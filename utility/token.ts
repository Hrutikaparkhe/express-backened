export const getToken = (obj) => { 
    var jwt  = require('jsonwebtoken');
    delete obj.password
    delete obj.repeatPaswword
    var token = jwt.sign(obj,'secret')
    console.log("****",token);   
}