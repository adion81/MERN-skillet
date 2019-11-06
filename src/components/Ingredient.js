import React, { Component } from 'react';


export default class Ingredient extends Component{
    render(){
        const {ingredient} = this.props;
        return(
            <li>{ingredient}</li>
        );
    }
}