import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRateFilter } from '../../redux/movies/movie-actions';
import RatingStar, { Rates } from '../rating-star/rating-star.component';
import './rating-filter-container.component.scss';

const RatingFilterContainer: React.FC<{}> = () => {
    const dispatch = useDispatch();
    const { rate } = useSelector((state: any) => state.movieReducer);

    const onStarClick = (value: Rates): void => {
        const selectedRate = value === rate ? Rates.NO_RATE : value;
        dispatch(setRateFilter(selectedRate));
    };

    return (
        <div className="RatingFilter">
            <span>Filter movie by rates:</span>
            {[2, 4, 6, 8, 10].map((val, key) => {
                return (
                    <RatingStar 
                        value={val} 
                        key={key} 
                        click={onStarClick} 
                        selected={val <= rate} 
                    />
                );
            })}
        </div>
    );
};

export default RatingFilterContainer;