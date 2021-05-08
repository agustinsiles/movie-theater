import React from 'react';
import './movie-avatar.component.scss';

interface IMovieAvatarProps {
    avatarUrl: string
};

const MovieAvatar: React.FC<IMovieAvatarProps> = ({ avatarUrl }) => (
    <img 
        src={avatarUrl} 
        alt='Movie'
        className='MovieAvatar'
    />
);

export default MovieAvatar;