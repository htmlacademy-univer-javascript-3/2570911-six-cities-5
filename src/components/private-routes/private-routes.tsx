import { Navigate, Route} from "react-router-dom";
import { Favorites } from "../../pages/favourites/favourites";
import { AppRoutes } from "../../enums/route-types";
import { Offer } from "../../pages/offer/offer";
import React from "react";
import { OfferType } from "../../types/offer-type";
import { Login } from "../../pages/login/login";
import { useAppSelector } from "../../hooks/storeHooks";


export function PrivateRoutes({isAuthorized} : { isAuthorized: boolean}){

    const offers = useAppSelector((state) => state.offersList);  

    if (isAuthorized){
        return (
            <React.Fragment>
            <Route path={AppRoutes.Favourites} element={<Favorites offers={offers}/>} />
            <Route path={AppRoutes.Login} element={<Navigate to={AppRoutes.Main} replace />}/>
            </React.Fragment>
        )
    }
    else{
        return (
            <React.Fragment>
            <Route path={AppRoutes.Favourites} element={<Navigate to={AppRoutes.Login} replace />} />
            <Route path={AppRoutes.Login} element={<Login />}/>
            </React.Fragment>
        )
    }
}