import { FC } from 'react';
import styles from './index.module.css';
import Loader from '../Loader';
import NoUserFound from '../NoUserFound';
import User from '../User';
import { useSearch } from './hooks';

const Search: FC = () => {
  const { showCard, user, searchHandle, loading, setSearchString, onFormSubmit } = useSearch();

  return (
    <div className={styles.search}>
      <form onSubmit={onFormSubmit} className={styles.searchForm}>
        <input
          type="text"
          placeholder="type GitHub user name"
          className={styles.searchInput}
          onChange={(event) => {
            setSearchString(event.target.value);
          }}
        />
        <button type="submit" className={styles.button} onClick={searchHandle}>
          Search
        </button>
      </form>
      {loading ? (
        <Loader />
      ) : (
        showCard && (user?.name !== '' ? <User userData={user} /> : <NoUserFound />)
      )}
    </div>
  );
};

export default Search;
