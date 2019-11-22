
export default {
    isUserLoggedIn: () => {
        let isAuthenticated = new Date(Date.now()) < new Date(localStorage.getItem(tokenExpiryKey)) &&
            localStorage.getItem(localStorageKey) === 'true';

        return (localStorage.getItem('userInfo') && isAuthenticated)
    },
}
