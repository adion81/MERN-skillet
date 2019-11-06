import React, {Component} from 'react';
import Scrapper from './Scrapper';
import Axios from 'axios';
import Ingredient from './Ingredient';


export default class Recipe extends Component{
    constructor(){
        super();
        this.state = {
            recipe:null,
            site: "",
            url: "",
            scrapped: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSite = this.handleSite.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.createIngredients = this.createIngredients.bind(this);
        this.createDirections = this.createDirections.bind(this);
    }
    handleInputChange(e){
        let value = e.target.value;
        this.setState(prevState => ({ 
            url:value
        }))
    }
    handleSite(siteName){
        this.setState(prevState => ({
            site: siteName
        }))
    }
    handleSubmit(e){
        e.preventDefault();
        let url = {
            url: this.state.url
        }
        Axios.post(`http://localhost:5000/${this.state.site}`,url)
            .then(result => {
                console.log(result)
                this.setState(prevState => ({
                    ...prevState.recipe, recipe: result['data']['results']
                }))
                this.clearForm()
                this.createIngredients();
                
            })
    }
    clearForm(){
        this.setState(prevState => ({ 
            url: ""
        }))
        this.setState(prevState => ({
            scrapped: true
        }))
        
    }

    createIngredients(){
        return this.state.recipe.ingredients.map(row => {
            console.log(row);
            return <Ingredient 
                ingredient={row}
            />
        })
    }
    createDirections(){
        return this.state.recipe.directions.map(row => {
            console.log(row);
            return <Ingredient 
                ingredient={row}
            />
        })
    }

    render(){
        if(this.state.scrapped === false){
            return(
                <Scrapper 
                    url={this.state.url}
                    handleSite={this.handleSite}
                    handleSubmit={this.handleSubmit}
                    handleInput={this.handleInputChange}
                />
            );
        }
        else{
            return(
                <div className="col-7 mx-auto bg-dark border-danger recipe">
                    <h2>Ingredients</h2>
                    <ul>
                        {this.createIngredients()}
                    </ul>
                    <h2>Directions</h2>
                    <ol>
                        {this.createDirections()}
                    </ol>

                </div>
            );

        }
    }
}