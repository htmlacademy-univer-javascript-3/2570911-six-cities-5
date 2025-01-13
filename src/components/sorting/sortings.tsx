import { useState } from 'react';
import { SortTypes } from '../../enums/sortTypes';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { reSort } from '../../redux-store/actions.ts';

export default function Sorting(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentSortType = useAppSelector((state) => state.mainpage.sortType);
  const [isMenuOpen, setMenuState] = useState(false);

  const handleSortOptionChoose = (sortType: SortTypes) => {
    dispatch(reSort(sortType));
    setMenuState(false);
  };


  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by: </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setMenuState(!isMenuOpen)}>
        <b>{currentSortType}</b>
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isMenuOpen && (
        <ul className="places__options places__options--custom places__options--opened">
          {Object.values(SortTypes).map((sortType) => (
            <li
              key={sortType}
              className={`places__option ${currentSortType === sortType ? 'places__option--active' : ''}`}
              tabIndex={0}
              onClick={() => handleSortOptionChoose(sortType)}>
              <b>{sortType}</b>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}