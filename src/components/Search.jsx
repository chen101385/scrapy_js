import React, { Component } from 'react';


export default class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: '',
        };
        this.onFormChange = this.onFormChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }


    onFormChange(e) {
        this.setState({ value: e.target.value })
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        let { value } = this.state;
        return (
            <div>
                <form className="Search" onSubmit={this.onFormSubmit}>
                    <input
                        type="text"
                        placeholder="start crawling here"
                        ref="SearchInput"
                        className="search"
                        value={value}
                        onChange={e => this.onFormChange(e.target.value)}
                    />
                    <input
                        type="submit"
                        value="Search"
                    />
                </form>
            </div>
        )
    }
}
