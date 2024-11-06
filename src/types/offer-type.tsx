export type OfferType = {
    id: string,
    title : string,
    type : string,
    previewImage : string,
    city: {
        name: string,
        location: {
          latitude: number,
          longitude: number,
          zoom: number
        }
    },
    location: {
        latitude: number,
        longitude: number,
        zoom: number
    },
    price : number,
    isFavorite : boolean,
    isPremium : boolean,
    rating : number,
}