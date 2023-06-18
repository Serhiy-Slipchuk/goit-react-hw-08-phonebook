import css from './Filter.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { filterSelector } from 'redux/selectors';
import { updateFilter } from 'redux/phonebookSlice';
import Input from 'components/Input/Input';

const Filter = function () {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const handlerFilterInputChange = event => {
    const { value } = event.target;
    dispatch(updateFilter(value));
  };

  return (
    <div className={css.filter}>
      <Input
        label="Find contacts by name"
        type="text"
        name="filter"
        value={filter}
        handler={e => handlerFilterInputChange(e)}
        required={false}
      />
    </div>
  );
};

export default Filter;
