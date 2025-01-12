import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 0 2em 0 2em;
`;

export const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <Button className="button__logout" onClick={handleLogout}>
      Log Out
    </Button>
  );
};
