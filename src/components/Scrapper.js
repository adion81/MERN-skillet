import React, { Component } from 'react';
import Input from './Input';

export default class Scrapper extends Component{
    render(){
        const { url, handleSubmit, handleInput, handleSite } = this.props;
        return(
            <div>
                <div>
                    <button onClick={() => handleSite("damn-delicious")}>Damn Delicious</button>
                    <button onClick={() => handleSite("eating-well")}>Eating Well</button>
                </div>
                <form onSubmit={handleSubmit} className="col-6 bg-dark text-light p-3">
                    <h3 className="text-warning text-center p-2">Scrape It!</h3>
                    <Input 
                        id={'url'}
                        name={'url'}
                        type={'text'}
                        value={url}
                        handleChange={handleInput}
                        className="mx-auto"
                    />
                    
                    <div className="form-group row justify-content-center">
                            <input 
                                className="btn btn-outline-warning btn-dark"
                                type="submit"
                                value="Get Recipe"
                            />
                        </div>
                </form>
            </div>
        );
    }
}