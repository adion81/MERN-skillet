const recipes = require('../controllers/recipes');

module.exports = (app) => {
    app.post('/damn-delicious',(req,res) => recipes.damnDelicious(req,res));
    app.post('/eating-well', (req,res) => recipes.eatingWell(req,res));
}