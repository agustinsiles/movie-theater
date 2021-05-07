import React from 'react';

interface ISearchProps {
    placeholder: string, 
    change: (event: React.ChangeEvent<HTMLInputElement>) => void
};

const SearchBox: React.FC<ISearchProps> = ({ placeholder, change }) => (
    <input type='search' placeholder={placeholder} onChange={change}/>
);

export default SearchBox;