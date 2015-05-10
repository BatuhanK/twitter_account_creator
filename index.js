var creator = require('./helpers/creator');



creator.newAccount({screen_name: "USERNAME", email : "EMAIL" , password:"PASSWORD", name: "NAME"}, function(err,response){
    if(err) console.log(err);
    else {
        console.log(response);
    }
});