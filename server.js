const express = require('express');
const app = express();
/* //////////////////////////////////////////////////// */
const mockUserData = [
    {name: 'Mark'},
    {name: 'Jill'}
];
/* //////////////////////////////////////////////////// */
const bodyParser = require('body-parser');
app.use(bodyParser.json());
/* //////////////////////////////////////////////////// */
app.post('/login', function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    /* //////////////////////////////////////////////////// */
    const mockUsername = 'mockuser';
    const mockPassword = 'SuperSecretPassword';
    /* //////////////////////////////////////////////////// */
    if(username === mockUsername && password === mockPassword){
        res.json({
            success: true,
            message: 'You logged in successfully'
        });
    }else{
        res.json({
            success: false,
            message: 'Error logging in'
        });
    }
    /* //////////////////////////////////////////////////// */
});
/* //////////////////////////////////////////////////// */
app.get('/user', function(req, res){
   res.json({
        success: true,
        message: 'Got user data',
        userData: mockUserData
   });
});
/* //////////////////////////////////////////////////// */
app.get('/user/:id', function(req, res){
    console.log(req.params.id);
    res.json({
        success: true,
        message: 'Got user data',
        user: req.params.id
    });
});
/* //////////////////////////////////////////////////// */
app.listen(8000, function(){
    console.log('Listening on port 8000');
});