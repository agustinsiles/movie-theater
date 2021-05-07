import React from 'react';

interface IMovieAvatarProps {
    avatarUrl: string
};

const MovieAvatar: React.FC<IMovieAvatarProps> = ({ avatarUrl }) => (
    <img src={`https://image.tmdb.org/t/p/w500/${avatarUrl}`} alt='Movie' />
);

export default MovieAvatar;