import React from 'react';
import Button from '../button/button.component';
import './search-box.component.scss';

interface ISearchProps {
    placeholder: string,
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
    searchHandler: () => void
};

const SearchBox: React.FC<ISearchProps> = ({ placeholder, changeHandler, searchHandler }) => {
    const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            searchHandler();
        }
    };

    return (
        <div className="SearchBox">
            <input 
                type='search' 
                placeholder={placeholder} 
                onChange={changeHandler}
                onKeyPress={keyPressHandler}
            />
            <Button clickHandler={searchHandler} label='Search!' />
        </div>
    );
}

export default SearchBox;