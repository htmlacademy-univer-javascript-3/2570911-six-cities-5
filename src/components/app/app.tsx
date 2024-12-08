import { MainPage } from "../../pages/main/main";
import { Error404 } from "../../pages/error404/error404";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { AppRoute } from "../../enums/route-types";
import { PrivateRoutes } from "../private-routes/private-routes";
import {useAppDispatch, useAppSelector} from '../../hooks/storeHooks.ts';
import {updateOffers, updateReviews} from '../../redux-store/action.ts';
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import { store } from "../../redux-store/index.ts";


export function App(){
    const reviews = useAppSelector((state) => state.reviews);
    const offers = useAppSelector((state) => state.offersList);
    const dispatch = useAppDispatch();
    dispatch(updateOffers(offers));
    dispatch(updateReviews(reviews));
    let isUserAuthorized = true;
    let authorizedRoutes = PrivateRoutes({isAuthorized : isUserAuthorized, offers : offers})
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path={AppRoute.Main} element={<MainPage/>}/>
                    <Route path={AppRoute.Error404} element={<Error404 />}/>
                    {authorizedRoutes}
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}