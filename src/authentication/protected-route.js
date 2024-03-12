import { withAuthenticationRequired } from '@auth0/auth0-react';
import React from 'react';
import { Route } from 'react-router-dom';
import Loading from '../components/common/loading';
import LoadingComponent from '../components/common/LoadingComponent';

export const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loading />,
    })}
    {...args}
  />
);
