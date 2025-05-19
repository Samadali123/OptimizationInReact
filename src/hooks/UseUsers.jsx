import { useState, useEffect } from 'react';
import { FetchUsersService } from '../services/user.service';


const useUsers = (productId) => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const result = await FetchUsersService();
        // console.log(result.users)
        if (result.error) {
          setError(result.error);
          setUsers(null);
        } else {
          setUsers(result?.users);
          setError(null);
        }
      } catch (err) {
        console.error("Error while fetching users", err);
        setError('An unexpected error occurred while fetching the Users');
        setUsers(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();


    return ()=>{
      setUsers(null);
      setLoading(true);
      setError(null);
    }
  }, []);

  return { users, loading, error };
};

export default useUsers;