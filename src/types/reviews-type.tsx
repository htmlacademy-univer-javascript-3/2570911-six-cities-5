export type ReviewType = {
    id : string,
    comment : string,
    user : {
        name : string,
        avatarUrl: string,
        isPro : boolean
    }
    date : string,
    rating : number;
}