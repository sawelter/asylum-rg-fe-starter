import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 0 2em 0 2em;
`;

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button onClick={() => loginWithRedirect()}>Log In</Button>;
};
