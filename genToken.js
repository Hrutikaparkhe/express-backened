const getToken = (obj = {email:"none"}) => { 
    var jwt  = require('jsonwebtoken');
    delete obj.password
    delete obj.repeatPaswword
    var token = jwt.sign(obj,'secret')
    console.log("****",token);   
    return token
}

console.log('>> getToken()', getToken());