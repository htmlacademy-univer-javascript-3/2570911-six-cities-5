import { MainPage } from "../../pages/main/main";
import { SimpleCard } from "../../types/place-card-type";
import { Error404 } from "../../pages/error404/error404";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { AppRoute } from "../../route-types";
import { PrivateRoutes } from "../private-routes/private-routes";

type warp = {
    availableCards : SimpleCard[]
}

export function App({availableCards} : warp){
    let isUserAuthorized = false;
    let authorizedRoutes = PrivateRoutes({isAuthorized : isUserAuthorized})
    return (
        <BrowserRouter>
            <Routes>
                <Route path={AppRoute.Main} element={<MainPage availableCards={availableCards}/>}/>
                <Route path={AppRoute.Error404} element={<Error404 />}/>
                {authorizedRoutes}
            </Routes>
        </BrowserRouter>
    )
}