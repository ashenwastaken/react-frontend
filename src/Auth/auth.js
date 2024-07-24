import Cookies from 'js-cookie';

export const setAuthToken = (token) => {
  Cookies.set('token', token, { 
    sameSite: 'None', 
    secure: true 
  });
};

export const getAuthToken = () => {
  return Cookies.get('token');
};
