import { Navigate, Route} from "react-router-dom";
import { Favorites } from "../../pages/favourites/favourites";
import { AppRoute } from "../../enums/route-types";
import { Offer } from "../../pages/offer/offer";
import React from "react";
import { OfferType } from "../../types/offer-type";
import { Login } from "../../pages/login/login";


export function PrivateRoutes({isAuthorized, offers} : { isAuthorized: boolean, offers : OfferType[] }){
    if (isAuthorized){
        return (
            <React.Fragment>
            <Route path={AppRoute.Favourites} element={<Favorites offers={offers}/>} />
            <Route path={`${AppRoute.Offer}/:id`} element={<Offer />} />
            <Route path={AppRoute.Login} element={<Navigate to={AppRoute.Main} replace />}/>
            </React.Fragment>
        )
    }
    else{
        return (
            <React.Fragment>
            <Route path={AppRoute.Favourites} element={<Navigate to={AppRoute.Login} replace />} />
            <Route path={`${AppRoute.Offer}/:id`} element={<Navigate to={AppRoute.Login} replace />} />
            <Route path={AppRoute.Login} element={<Login />}/>
            </React.Fragment>
        )
    }
}