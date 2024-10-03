import { MainPage } from "../../pages/main/main";
import { SimpleCard } from "../../types/place-card-type";

type warp = {
    availableCards : SimpleCard[]
}

export function App({availableCards} : warp){
    return (
        MainPage(availableCards)
    )
}