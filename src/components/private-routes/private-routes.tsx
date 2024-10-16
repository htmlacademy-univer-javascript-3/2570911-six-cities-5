import { Navigate, Route} from "react-router-dom";
import { Favorites } from "../../pages/favourites/favourites";
import { AppRoute } from "../../route-types";
import { Offer } from "../../pages/offer/offer";
import React from "react";
import { Login } from "../../pages/login/login";


export function PrivateRoutes({isAuthorized} : { isAuthorized: boolean }){
    if (isAuthorized){
        return (
            <React.Fragment>
            <Route path={AppRoute.Favourites} element={<Favorites />} />
            <Route path={AppRoute.Offer} element={<Offer />} />
            <Route path={AppRoute.Login} element={<Navigate to={AppRoute.Main} replace />}/>
            </React.Fragment>
        )
    }
    else{
        return (
            <React.Fragment>
            <Route path={AppRoute.Favourites} element={<Navigate to={AppRoute.Login} replace />} />
            <Route path={AppRoute.Offer} element={<Navigate to={AppRoute.Login} replace />} />
            <Route path={AppRoute.Login} element={<Login />}/>
            </React.Fragment>
        )
    }
}