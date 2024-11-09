import React from 'react';

export function ReviewForm(): JSX.Element {
    const [formData, setFormData] = React.useState({
        review: '',
        rating: 1
    });

    const handleFieldChange = (evt: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        const {name, value} = evt.target;
        setFormData({...formData, [name]: value});
    };

  
    const ratingStars = (value: number, title: string) =>
       (<>
            <input className="form__rating-input visually-hidden" onChange={handleFieldChange} name="rating" value={value} id={`${value}-stars`} type="radio" />
            <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
            <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
            </svg>
            </label>
        </>
        );
    

    return (
        <form className="reviews__form form" action="#" method="post">
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
            <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
        </div>
        </form>
    );
}
