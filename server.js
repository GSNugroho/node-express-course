const express = require('express');
const app = express();

const mockUserData = [
    {name: 'Mark'},
    {name: 'Jill'}
];

app.get('/user', function(req, res){
   res.json({
        success: true,
        message: 'Got user data',
        userData: mockUserData
   });
});

app.listen(3000, function(){
    console.log('Listening on port 3000');
});