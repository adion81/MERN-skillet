const axios = require('axios'),
    cheerio = require('cheerio');

module.exports = {
    damnDelicious: (req,res) => {
        console.log(req.body)
        const myIngredients = [];
        const myDirections = [];
        axios.get(req.body.url)
        .then(response => {
            const $ = cheerio.load(response.data);
            
            const ingredients = $("ul","div.ingredients").children().toArray()
            for( var x of ingredients){
                myIngredients.push(x.children[0].data)
            }
            console.log(myIngredients);
            
            const directions = $("ol","div.instructions").children().toArray();
            for( var y of directions){
                myDirections.push(y.children[0].data)
            }
            console.log(myDirections);

            res.json({results: {ingredients: myIngredients,directions: myDirections}})
            
            
        })
        .catch(err => {
            console.log(err)
            res.json({errors: err.errors})
        })
    }
}