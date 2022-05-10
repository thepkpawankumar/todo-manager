import React, { useCallback, useContext, useEffect, useState } from 'react';
import AuthUserContext from '../../context/Session';
import { AppwriteContext } from '../../components/Appwrite';

const withAuthentication = (Component) =>
  function WithAuthentication(props) {
    const [authUser, setAuthUser] = useState(null);
    const appwrite = useContext(AppwriteContext);

    const getCurrentUser = useCallback(() => {
      appwrite
        .doGetCurrentUser()
        .then((user) => {
          setAuthUser(user);
        })
        .catch(() => {
          setAuthUser(null);
        });
    }, [appwrite])

    useEffect(() => {
      getCurrentUser();
    }, [getCurrentUser]);

    return (
      <AuthUserContext.Provider value={{ authUser, getCurrentUser }}>
        <Component {...props} />
      </AuthUserContext.Provider>
    );
  };

export default withAuthentication;