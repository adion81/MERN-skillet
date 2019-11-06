const axios = require('axios'),
    cheerio = require('cheerio');

module.exports = {
    damnDelicious: (req,res) => {
        
        const myIngredients = [];
        const myDirections = [];
        axios.get(req.body.url)
        .then(response => {
            const $ = cheerio.load(response.data);
            
            const ingredients = $("ul","div.ingredients").children().toArray()
            for( var x of ingredients){
                myIngredients.push(x.children[0].data)
            }
            
            const directions = $("ol","div.instructions").children().toArray();
            for( var y of directions){
                myDirections.push(y.children[0].data)
            }
            

            res.json({results: {ingredients: myIngredients,directions: myDirections}})
            
            
        })
        .catch(err => {
            console.log(err)
            res.json({errors: err.errors})
        })
    },
    eatingWell : (req,res) => {
        const myIngredients = [];
        const myDirections = [];
        axios.get(req.body.url)
            .then(response => {
                const $ = cheerio.load(response.data);
                const ingredients = $("section.recipeIngredients").children('ul').toArray();
                for( var x of ingredients){
                    for( var y of x.children){
                        if(y.name == 'li'){
                            for(var z of y.children[0].next.children){
                                if(!z.data){
                                    continue;
                                }
                                else{
                                    myIngredients.push(z.data)
                                }
                            }
                        }
                    }
                }
                const directions = $("ol.listNumbers.recipeDirectionsList").children('li.step').toArray();
                for(var a of directions){
                    for(var b of a.children){
                        for( var c of b.children){
                            myDirections.push(c.data)
                        }
                    }
                }
                
                res.json({results: {ingredients: myIngredients,directions: myDirections}})
                
            })
            .catch(err => res.json({errors: err.errors}))
    }
}