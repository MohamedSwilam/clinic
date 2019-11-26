
export default {
    isUserLoggedIn: () => {
        let isAuthenticated = new Date(Date.now()) < new Date(localStorage.getItem('tokenExpiry')) &&
            localStorage.getItem('loggedIn') === 'true';

        return (localStorage.getItem('userInfo') && isAuthenticated)
    },
}
