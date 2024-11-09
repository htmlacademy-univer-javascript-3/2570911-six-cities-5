import { OfferType } from "../types/offer-type";

export const offers : OfferType[] = [
    {
        id: "3dfb4c8d-7444-46a4-8f5b-ce80ad0cffbf",
        title: "Perfectly located Castro",
        type: "apartment",
        price: 294,
        previewImage: "https://14.design.htmlacademy.pro/static/hotel/4.jpg",
        city: {
          name: "Paris",
          location: {
            latitude: 48.85661,
            longitude: 2.351499,
            zoom: 13
          }
        },
        location: {
          latitude: 48.86861,
          longitude: 2.342499,
          zoom: 16
        },
        isFavorite: true,
        isPremium: false,
        rating: 2.6
      },
      {
        "id": "3153c353-38b8-4e54-b689-2df57295f450",
        "title": "Nice, cozy, warm big bed apartment",
        "type": "apartment",
        "price": 428,
        "previewImage": "https://14.design.htmlacademy.pro/static/hotel/2.jpg",
        "city": {
          "name": "Paris",
          "location": {
            "latitude": 48.85661,
            "longitude": 2.351499,
            "zoom": 13
          }
        },
        "location": {
          "latitude": 48.83461,
          "longitude": 2.335499,
          "zoom": 16
        },
        "isFavorite": false,
        "isPremium": false,
        "rating": 1.1
      },
      {
        "id": "2405a442-7189-4ba5-86af-3a71ce85c813",
        "title": "Wood and stone place",
        "type": "room",
        "price": 258,
        "previewImage": "https://14.design.htmlacademy.pro/static/hotel/11.jpg",
        "city": {
          "name": "Paris",
          "location": {
            "latitude": 48.85661,
            "longitude": 2.351499,
            "zoom": 13
          }
        },
        "location": {
          "latitude": 48.87561,
          "longitude": 2.375499,
          "zoom": 16
        },
        "isFavorite": false,
        "isPremium": true,
        "rating": 1.8
      },
      {
        "id": "e72fa761-c6f0-4ed3-8ace-5b39ade314f4",
        "title": "The house among olive ",
        "type": "hotel",
        "price": 226,
        "previewImage": "https://14.design.htmlacademy.pro/static/hotel/19.jpg",
        "city": {
          "name": "Paris",
          "location": {
            "latitude": 48.85661,
            "longitude": 2.351499,
            "zoom": 13
          }
        },
        "location": {
          "latitude": 48.86161,
          "longitude": 2.340499,
          "zoom": 16
        },
        "isFavorite": false,
        "isPremium": true,
        "rating": 1.9
      }
]