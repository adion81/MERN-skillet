import React, { Component } from 'react';

export default class Info extends Component{
    render(){
        return(
            <div className="p-2 pt-3 mx-auto bg-dark col-4 text-light text-center">
                <p>Welcome to <span className="text-warning">SKILLET</span>!  Navigate to Recipes to get the recipe.</p>
            </div>
        );
    }
}