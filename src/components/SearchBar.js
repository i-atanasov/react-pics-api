import React from "react";

class SearchBar extends React.Component {
    state = { searchTerm: '' };

    formHandler = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.searchTerm)
    };

    render() {
        return (
        <div className="ui segment">
            <form onSubmit={this.formHandler} className="ui form">
                <div className='field'>
                    <label>Find 25 images:</label>
                    <input 
                        type='text' 
                        value={this.state.searchTerm} 
                        placeholder="Type search term" 
                        onChange={ (e) => this.setState({ searchTerm: e.target.value }) } />
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;