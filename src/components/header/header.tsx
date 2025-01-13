import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks"
import { authLogout } from "../../redux-store/api-actions";

export function Header() : JSX.Element{
    const isAuthorized : boolean = useAppSelector((state) => state.user.isAuthorized)
    const userName = useAppSelector((state) => state.user.userName)
    const offers = useAppSelector((state) => state.mainpage.offersList)
    const dispatch = useAppDispatch();
    const endSession = () =>{
        dispatch(authLogout());
    }
    return (
        <header className="header">
            <div className="container">
            <div className="header__wrapper">
                <div className="header__left">
                <Link to='/' className="header__logo-link header__logo-link--active">
                    <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
                </Link>
                </div>
                {isAuthorized 
                ? (<nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item user">
                        <Link to='/favourites' className="header__nav-link header__nav-link--profile">
                            <div className="header__avatar-wrapper user__avatar-wrapper">
                            </div>
                            <span className="header__user-name user__name">{userName}</span>
                            <span className="header__favorite-count">{offers.filter((offer) => offer.isFavorite).length}</span>
                        </Link>
                        </li>
                        <li className="header__nav-item">
                            <Link to='/' className="header__nav-link" onClick={endSession}>
                                <span className="header__signout">Log out</span>
                            </Link>
                        </li>
                    </ul>
                    </nav>)
                : (<nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <Link to={'/login'} className="header__nav-link">
                                <span className="header__signout">Sign in</span>
                            </Link>
                        </li>
                    </ul>
                    </nav>)
                }
            </div>
            </div>
        </header>
    )
}