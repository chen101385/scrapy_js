import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';


class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: '',
        };
    }

onFormChange(input) {
    this.setState({input})
    console.log(input)
}

render() {
    return (
        <div>
            <FormControl type="text" placeholder="start crawling here" ref="SearchInput" className="search" value={this.state.form} onChange={e => this.onFormChange(e.target.value)} />
        </div>
    )
}
}

export default Search;
