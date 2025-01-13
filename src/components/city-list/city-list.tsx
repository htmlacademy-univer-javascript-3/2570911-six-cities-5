import {useAppDispatch} from '../../hooks/storeHooks.ts';
import {changeCity} from '../../redux-store/actions.ts';
import { CityType } from '../../types/city-type.ts';

export function CitiesList({cities}: {cities: Record<string, CityType>}): JSX.Element {
  const dispatch = useAppDispatch();
  const handleCityChange = (city: CityType) => {
    dispatch(changeCity(city));
  };
  const citiesArray: CityType[] = Object.values(cities);
  return (
    <ul className="locations__list tabs__list">
      {citiesArray.map((city) => (
        <li
          key={city.id}
          className="locations__item"
          onClick={() => handleCityChange(city)}>
          <a className="locations__item-link tabs__item" href="#">
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}