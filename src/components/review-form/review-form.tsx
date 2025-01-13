import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { postUserReview } from '../../redux-store/api-actions';

export function ReviewForm({offerId} : {offerId : string}): JSX.Element {
    const [formData, setFormData] = useState({
        review: '',
        rating: 0
    });

    const [canPost, setCanPost] = useState(false);
    const [isPosting, setIsPosting] = useState(false);

    const dispatch = useAppDispatch();

    const handleFieldChange = (evt: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        const {name, value} = evt.target;
        console.log(name, value)
        if (formData.review.length >= 50 && formData.review.length <= 300 && formData.rating !== 0){
            setCanPost(true);
        }
        else{
            setCanPost(false);
        }
        setFormData({...formData, [name]: value});
    };

  
    const ratingStars = (value: number, title: string) =>
       (<>
            <input className="form__rating-input visually-hidden" onChange={handleFieldChange} name="rating" value={value} id={`${value}-stars`} type="radio" checked={formData.rating === value}/>
            <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
            <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
            </svg>
            </label>
        </>
        );

    const submit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        setIsPosting(true);
        dispatch(postUserReview({
            comment: formData.review,
            rating: formData.rating,
            id: offerId,
        }));
        setFormData({review : '', rating : 0});
        setIsPosting(false);
        setCanPost(false);
        };
        
    

    return (
        <form className="reviews__form form" onSubmit={submit} aria-disabled={!isPosting} method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
            {ratingStars(5, 'perfect')}
            {ratingStars(4, 'good')}
            {ratingStars(3, 'not bad')}
            {ratingStars(2, 'badly')}
            {ratingStars(1, 'terribly')}
        </div>
        <textarea className="reviews__textarea form__textarea" onChange={handleFieldChange} value={formData.review} id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"/>
        <div className="reviews__button-wrapper">
            <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
            </p>
            <button className="reviews__submit form__submit button" type="submit" disabled={!canPost}>Submit</button>
        </div>
        </form>
    );
}
