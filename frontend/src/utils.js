export const parseRequestUrl = () => {
    const url = document.location.hash.toLowerCase();
    const request = url.split('/');
    return {
        resource: request[1],
        id: request[2],
        verb: request[3],
    };
};

export const rerender = async (component) => {
    document.getElementById(
        'main-container'
    ).innerHTML = await component.render();
    await component.after_render();
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
