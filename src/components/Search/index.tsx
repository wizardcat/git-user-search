import { FC } from 'react';
import styles from './index.module.css';
import Loader from '../Loader';
import NoUserFound from '../NoUserFound';
import User from '../User';
import { useSearch } from './hooks';

const Search: FC = () => {
  const { showCard, user, searchHandle, loading, setSearchString } = useSearch();

  return (
    <div className={styles.search}>
      <div className={styles.searchInputs}>
        <input
          type="text"
          placeholder="type user name"
          onChange={(event) => {
            setSearchString(event.target.value);
          }}
        />
        <button className={styles.button} onClick={searchHandle}>
          Search
        </button>
      </div>
      {loading ? <Loader /> : showCard && (user?.name !=='' ? <User userData={user} /> : <NoUserFound />)}
    </div>
  );
};

export default Search;
