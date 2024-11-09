import { ReviewType } from "../../types/reviews-type";
import { SingleReview } from "../review/review";

export function ReviewList({offerReviews} : {offerReviews : ReviewType[]}) : React.JSX.Element{
    return (
        <>
            {offerReviews.map((review) => (
                <ul className="reviews__list">
                    <li className="reviews__item">
                        <SingleReview review={review}/>
                    </li>
                </ul>
            ))}
        </>)
}