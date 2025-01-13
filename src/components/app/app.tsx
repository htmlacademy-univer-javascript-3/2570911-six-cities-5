import { MainPage } from "../../pages/main/main";
import { Error404 } from "../../pages/error404/error404";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { AppRoutes } from "../../enums/route-types";
import { PrivateRoutes } from "../private-routes/private-routes";
import {useAppSelector} from '../../hooks/storeHooks.ts';
import { Spinner } from "../spinner/spinner.tsx";
import { Offer } from "../../pages/offer/offer.tsx";


export function App(){
    const isLoaded : boolean = useAppSelector((state) => state.app.isLoaded);
    let isUserAuthorized = useAppSelector((state) => state.user.isAuthorized);
    let authorizedRoutes = PrivateRoutes({isAuthorized : isUserAuthorized})
    return (
        isLoaded 
        ? (<BrowserRouter>
            <Routes>
                <Route path={AppRoutes.Main} element={<MainPage/>}/>
                <Route path={AppRoutes.Error404} element={<Error404 />}/>
                <Route path={`${AppRoutes.Offer}/:id`} element={<Offer />} />
                {authorizedRoutes}
            </Routes>
        </BrowserRouter>)
        : (<Spinner />)        
    )
}