import React from 'react';
import PropTypes from 'prop-types';
import Login from '../pieces/Login.jsx';

const ViewLogin = ({ history }) => (<Login history={history}/>);

ViewLogin.propTypes = {
  history: PropTypes.object.isRequired,
};
export default ViewLogin;
