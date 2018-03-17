var friendsData = require("../data/friends");
console.log("loggin in frineds", friendsData);

var person = {};
var bestMatch = {};
var counter = 0;
var listedScore = 0;


module.exports = function(app){

    app.get("/api/survey", function(req, res){
        // res.json(friendsData);
        //person = req.body;
        //res.json(match(person, friendsData));
    });


    app.post("/api/person", function(req,res){
        //res.json(req.body);

        // person = req.body;
        console.log("I am inside of the post route")
        console.log(req.body); 

        //1. read the data (from json) and copy in a variable inputData
        //2. run the match using inputData and copy in foundMatch
        //3. return foundMatch to the client
        inputData = req.body;

        foundMatch = match(inputData);

        res.json(foundMatch);

        

    });







function match(user){
    // go through friendsData
    // calculate some distance/score
    // return the best match
    
    bestMatchCounter=0;
    for (var i=0; i < friendsData.length; i++) {
        counter=0;
        for (var j=0; j < friendsData[i]['score[]'].length; j++) {
            counter=counter+Math.abs(user[j]['score']-friendsData[i]['score[]'][j]);
        }
        console.log(friendsData)

        if (i===0) {
            bestMatch=friendsData[i];
            bestMatchCounter=counter;
        }
        else if(counter<bestMatchCounter){
            bestMatch=friendsData[i];
            bestMatchCounter=counter;
        }
    }
    return(bestMatch);
}

app.get("/api/friends", function(req, res){
  res.json(friends)
});

}