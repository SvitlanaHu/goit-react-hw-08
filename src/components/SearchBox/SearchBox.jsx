import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";
import styles from './SearchBox.module.css'

const SearchBox = () => {
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };
    
  return (
    <div className={styles.container}>
      <label htmlFor="search-filter" className={styles.text}>Find contacts by name:</label>
      <input
        id="search-filter"
        className={styles.box}
        type="text"
        value={filter}
        placeholder="Search by name"
        onChange={handleFilterChange}
      />            
    </div>
  );
};
export default SearchBox;