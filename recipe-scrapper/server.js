const cheerio = require('cheerio'),
    axios = require('axios'),
    express = require('express'),
    app = express(),
    port = 5000,
    server = app.listen(port,() => console.log(`Listening on port ${port}`))

app.use(express.json());
require('./server/config/routes')(app);


// const myIngredients = [];
// const myDirections = [];
// axios.get('https://damndelicious.net/2019/07/24/sheet-pan-chicken-fajitas/')
//     .then(response => {
//         const $ = cheerio.load(response.data);
        
//         const ingredients = $("ul","div.ingredients").children().toArray()
//         for( var x of ingredients){
//             myIngredients.push(x.children[0].data)
//         }
//         console.log(myIngredients);
        
//         const directions = $("ol","div.instructions").children().toArray();
//         for( var y of directions){
//             myDirections.push(y.children[0].data)
//         }
//         console.log(myDirections);
        
        
//     })
//     .catch(err => {
//         console.log(err)
//     })