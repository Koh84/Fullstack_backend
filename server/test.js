var models = require('./server.js').models;

/*
models.Profile.create({name: 'Nick'}, (err, profile)=>{
    console.log("data?", err, profile);
})
*/

/*
models.Profile.upsert({name: 'Nick1'}, (err, profile)=>{
    console.log("data?", err, profile);
})
*/

/*
models.Profile.upsert({id: '610bf075082cdb3b24cfe985', name: 'Nick1'}, (err, profile)=>{
    console.log("data?", err, profile);
})
*/

models.Profile.findOrCreate({name: 'Nick1'}, (err, profile)=>{
    console.log("data?", err, profile);
    if(err){
        console.log("There is an error", err);
    }else if(profile){
        /*profile.updateAttributes({
            email: "nick@nick.com"
        }, (updateError, updated) => {
            console.log("Saved?", updateError, updated);
        });*/
        profile.email = 'nick@nick2.com';
        profile.save((ue, updated)=>{
            console.log("Updated?", ue, updated);
        });
    }
})