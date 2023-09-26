import { useEffect, useState, FormEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { getUser } from '../../redux/redusers/searchSlice';

export const useSearch = () => {

  const user = useAppSelector((state) => state.userInfoReducer);
  const dispatch = useAppDispatch();

  const [searchString, setSearchString] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(false);
  }, [user]);


  const searchHandle = () => {
    if (!searchString) return;
    setShowCard(true);
    setLoading(true);
    dispatch(getUser(searchString));
  };

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return {
    showCard, user, searchHandle, loading, setSearchString, onFormSubmit
  }

}

