import React from 'react';
import './movie-avatar.component.scss';

interface IMovieAvatarProps {
    avatarUrl: string
};

const MovieAvatar: React.FC<IMovieAvatarProps> = ({ avatarUrl }) => (
    <img 
        src={`https://image.tmdb.org/t/p/w500/${avatarUrl}`} 
        alt='Movie'
        className='MovieAvatar'
    />
);

export default MovieAvatar;