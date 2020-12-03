import React from 'react';
import '../style/SearchBar.css';

class SearchBar extends React.Component {
    state = { term: '' };


    onInputChange = event => {

        this.setState({ term: event.target.value });

    };

    onFormSubmit = event => {

        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    };
    
    render() {
        return (
            
                
                   
                    <div className=" ui segment focus search-bar">
                    <form className="ui form" onSubmit={this.onFormSubmit}>
                        
                        <div className="field">
                        
                        <input type="text" 
                            placeholder="Search the Video"
                            value={this.state.term}
                            onChange={this.onInputChange}
                            />
                         
                        </div>
                    </form>
                    
                </div>
         
               
                
           


       
        );
    }
}

export default SearchBar;