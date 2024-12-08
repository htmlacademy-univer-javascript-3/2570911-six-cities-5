export type CityType = {
    name: string,
    id?: number
    location: {
      latitude: number,
      longitude: number,
      zoom?: number
    }
}