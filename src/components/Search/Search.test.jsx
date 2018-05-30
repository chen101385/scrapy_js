import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const handleSearchFunc = () => 1;

    ReactDOM.render(<Search handleSearch={handleSearchFunc} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
