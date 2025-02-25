import Cookies from 'js-cookie';

export const setToken = (token) => {
    Cookies.set('auth_token', token, { expires: 7 }); // Expires in 7 days
};

export const getToken = () => {
    return Cookies.get('auth_token');
};

export const removeToken = () => {
    Cookies.remove('auth_token');
};