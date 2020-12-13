export const getCartItems = () => {
    return localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [];
};
export const setCartItems = (cartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};
export const setUserInfo = ({
                                _id = '',
                                name = '',
                                email = '',
                                password = '',
                                token = '',
                                isAdmin = false,
                            }) => {
    localStorage.setItem(
        'userInfo',
        JSON.stringify({
            _id,
            name,
            email,
            password,
            token,
            isAdmin,
        })
    );
};
export const getUserInfo = () => {
    return localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : { name: '', email: '', password: '' };
};
