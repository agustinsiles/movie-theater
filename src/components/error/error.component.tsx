import React from 'react';
import Button from '../button/button.component';
import './error.component.scss';

interface IErrorProps {
    errorMsg?: string,
    retry?: () => void
};

const Error: React.FC<IErrorProps> = ({ errorMsg, retry }) => (
    <div className="Error">
        {errorMsg || 'Oops. An error has occurred. We\'re sorry about that.'}
        {retry === undefined ? null : <Button clickHandler={retry} label={'Retry'} />}
    </div>
);

export default Error;
