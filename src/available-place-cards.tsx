import {SimpleCard} from './types/place-card-type.tsx';

export const cardArray : SimpleCard[] = [
    {
        isPremium : true,
        imageLink : "img/apartment-01.jpg",
        price : 120,
        isFavourite : false,
        rating : 80,
        description : "Beautiful &amp; luxurious apartment at great location",
        placeType : "Apartment"
    },
    {
        isPremium : false,
        imageLink : "img/room.jpg",
        price : 80,
        isFavourite : true,
        rating : 80,
        description : "Wood and stone place",
        placeType : "Room"
    },
    {
        isPremium : false,
        imageLink : "img/apartment-02.jpg",
        price : 132,
        isFavourite : false,
        rating : 80,
        description : "Canal View Prinsengracht",
        placeType : "Apartment"
    },
    {
        isPremium : true,
        imageLink : "img/apartment-03.jpg",
        price : 180,
        isFavourite : false,
        rating : 100,
        description : "Nice, cozy, warm big bed apartment",
        placeType : "Apartment"
    },
    {
        isPremium : false,
        imageLink : "img/room.jpg",
        price : 80,
        isFavourite : true,
        rating : 80,
        description : "Wood and stone place",
        placeType : "Room"
    }
]