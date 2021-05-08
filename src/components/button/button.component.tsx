import React from 'react';
import './button.component.scss';

interface IButtonProps {
    clickHandler: () => void,
    label?: string
};

const Button: React.FC<IButtonProps> = ({ clickHandler, label }) => (
    <button 
        className="MainButton" 
        onClick={clickHandler}>{label || 'Search'}
    </button>
);

export default Button;