var friendsData = require("../data/friends");


var person = {};
var bestMatch = {};
var counter = 0;
var listedScore = 0;


module.exports = function(app){

    app.get("/api/survey", function(req, res){
        res.json(friendsData);
        person = req.body;
        res.json(match(person, friendsData));
    });


    app.post("/api/person", function(req,res){
        //res.json(req.body);

        // person = req.body;
        console.log("hi")
        

    });







function match(user, friends){
    for (var i=0; i < friendsData.length; i++) {
        counter=0;
        for (var j=0; j < friendsData[i]['score[]'].length; j++) {
            counter=counter+Math.abs(user['score[]'][j]-friends[i]['score[]'][j]);
        }
        console.log(friendsData)
        if (i===0) {
            bestMatch=friends[i];
            listedScore=counter;
        }
        else if(counter<asignedNum){
            bestMatch=friends[i];
            listedScore=counter;
        }
    }
    return(bestMatch);
}
app.get("/api/friends", function(req, res){
  res.json(friends)
});

}