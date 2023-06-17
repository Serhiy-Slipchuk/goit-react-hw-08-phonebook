import css from './Filter.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { filterSelector } from 'redux/selectors';
import { updateFilter } from 'redux/phonebookSlice';

const Filter = function () {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const handlerFilterInputChange = event => {
    const { value } = event.target;
    dispatch(updateFilter(value));
  };

  return (
    <div className={css.filter}>
      <label className={css['input-label']}>Find contacts by name
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={e => handlerFilterInputChange(e)}
      />
      </label>
    </div>
  );
};

export default Filter;
