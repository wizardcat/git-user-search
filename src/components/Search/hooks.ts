import { useState } from 'react';
import { UserInfo } from '../../types';

export const useSearch=()=>{

const [searchString, setSearchString] = useState('');
const [user, setUser] = useState<UserInfo>();
const [loading, setLoading] = useState(false);

const getUser = async (searchString: string) => {
  setLoading(true);
  if (!searchString) return;

  const response = await fetch(`https://api.github.com/users/${searchString}`);

  if (response.status === 404) {
    setLoading(false);
    setUser(undefined);
    return;
  }

  const user = await response.json();

  setLoading(false);
  setUser(user);
};

const searchHandle = () => {
  getUser(searchString);
};

return {
  user, searchHandle, loading, setSearchString
}

}

