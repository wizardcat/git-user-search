import { FC } from 'react';
import styles from './index.module.css';
import Loader from '../Loader';
import NoUserFound from '../NoUserFound';
import User from '../User';
import { useSearch } from './hooks';

const Search: FC = () => {
  const { user, searchHandle, loading, setSearchString } = useSearch();

  return (
    <div className={styles.search}>
      <div className={styles.searchInputs}>
        <input
          type="text"
          className="large"
          placeholder="type user name"
          id="app-input"
          data-testid="app-input"
          onChange={(event) => {
            setSearchString(event.target.value);
          }}
        />
        <button className={styles.button} id="submit-button" onClick={searchHandle}>
          Search
        </button>
      </div>
      {loading ? <Loader /> : user ? <User userData={user} /> : <NoUserFound />}
    </div>
  );
};

export default Search;
