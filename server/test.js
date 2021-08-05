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

/*
models.Profile.findOrCreate({name: 'Nick1'}, (err, profile)=>{
    console.log("data?", err, profile);
    if(err){
        console.log("There is an error", err);
    }else if(profile){ */
        /*profile.updateAttributes({
            email: "nick@nick.com"
        }, (updateError, updated) => {
            console.log("Saved?", updateError, updated);
        });*//*
        profile.email = 'nick@nick2.com';
        profile.save((ue, updated)=>{
            console.log("Updated?", ue, updated);
        });
    }
})
*/

/*
var toSave = [
    {name: 'Nick1', email: 'nick1@nick.com'},
    {name: 'NickA', email: 'nickA@nick.com'},
    {name: 'Nick2', email: 'nick2@nick.com'},
    {name: 'NickB', email: 'nickB@nick.com'},
    {name: 'Nick3', email: 'nick3@nick.com'},
    {name: 'NickC', email: 'nickC@nick.com'},
    {name: 'Nick4', email: 'nick4@nick.com'},
    {name: 'NickD', email: 'nickD@nick.com'}
]
toSave.map(obj=>{
    models.Profile.create(obj, (err, created)=>{
        console.log("Created?", err, created);
    });
});
*/

/*
var filter = {
    where: {
        name: {like: 'Nick'}
    },
    order: 'id ASC'
}
models.Profile.find(filter, (err, found)=>{
console.log("Found?", err, found);
});
*/

/*
var filter = {
    where: {
        name: {like: 'Nick'}
    },
    order: 'id ASC',
    limit: 3,
    skip: 4,
    fields: {
        email: true
    }
}

models.Profile.find(filter, (err, found)=>{
    console.log("Found?", err, found);
});
*/

/*
var filter = {
    where: {
        name: {like: 'Nick'}
    },
    order: 'id ASC',
    limit: 3,
    skip: 4,
    fields: {
        email: true
    }
}
*/

/*
models.Profile.findById("610bf36870188a23009b26b5", (err, found) =>{
    console.log("found", err, found);
    found.destroy();
});
*/

/*
var filter = {
    where: {
        name: {like: 'Nick'}
    },
    order: 'id ASC',
    limit: 3,
    skip: 4,
    fields: {
        email: true
    }
}

models.Profile.destroyAll(filter.where, (err, found) =>{
    console.log("Destroyed?", err, found);
});
*/

models.Profile.destroyById("610bf92bf6feee42c8b7b888", (err, found) =>{
    console.log("Destroyed?", err, found);
});