import React from 'react';
import { IoStarOutline, IoStarSharp } from "react-icons/io5";

export enum Rates {
    TWO = 2,
    FOUR = 4,
    SIX = 6,
    EIGHT = 8,
    TEN = 10,
    NO_RATE = 0
};

interface IRatingStar {
    click: (rate: Rates) => void,
    value: Rates,
    selected: boolean
};

const RatingStar: React.FC<IRatingStar> = ({ click, value, selected }) => {
    const StarComponent = selected ? IoStarSharp : IoStarOutline;
    return <StarComponent onClick={() => click(value)} />;
};

export default RatingStar;