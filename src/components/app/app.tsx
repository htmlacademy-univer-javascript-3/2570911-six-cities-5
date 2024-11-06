import { MainPage } from "../../pages/main/main";
import { SimpleCard } from "../../types/place-card-type";
import { Error404 } from "../../pages/error404/error404";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { AppRoute } from "../../route-types";
import { PrivateRoutes } from "../private-routes/private-routes";
import { OfferType } from "../../types/offer-type";


export function App({availableCards, offers} : {availableCards : SimpleCard[], offers : OfferType[]}){
    let isUserAuthorized = true;
    let authorizedRoutes = PrivateRoutes({isAuthorized : isUserAuthorized, offers : offers})
    return (
        <BrowserRouter>
            <Routes>
                <Route path={AppRoute.Main} element={<MainPage offers={offers}/>}/>
                <Route path={AppRoute.Error404} element={<Error404 />}/>
                {authorizedRoutes}
            </Routes>
        </BrowserRouter>
    )
}