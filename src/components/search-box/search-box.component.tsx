import React from 'react';

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
        <div>
            <input 
                type='search' 
                placeholder={placeholder} 
                onChange={changeHandler}
                onKeyPress={keyPressHandler}
            />
            <button onClick={searchHandler}>Search</button>
        </div>
    );
}

export default SearchBox;