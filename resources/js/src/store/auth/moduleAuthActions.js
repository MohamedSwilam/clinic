
import jwt from "../../http/requests/auth/jwt/index.js"
import router from '@/router';

export default {
    // JWT
    loginJWT({ commit }, payload) {

      return new Promise((resolve, reject) => {
        jwt.login(payload.userDetails.email, payload.userDetails.password)
          .then(response => {
              console.log(response);
            // If there's user data in response
            if(response.data.data.user) {
                // Navigate User to homepage
                router.push(router.currentRoute.query.to || '/dashboard');

                // Set accessToken
                localStorage.setItem("accessToken", response.data.data.access_token.accessToken);

                // Set Expiry Date
                localStorage.setItem('tokenExpiry', new Date(response.data.data.access_token.token.expires_at)*1);

                // Set loggedIn True
                localStorage.setItem('loggedIn', 'true');

                // Update user details
                commit('UPDATE_USER_INFO', response.data.data.user, {root: true});

                // Set bearer token in axios
                commit("SET_BEARER", response.data.data.access_token.accessToken);

                resolve(response)
            }else {
              reject({message: "Wrong Email or Password"})
            }

          })
          .catch(error => {
              reject(error);
          })
      })
    },
    registerUserJWT({ commit }, payload) {

      const { displayName, email, password, confirmPassword } = payload.userDetails;

      return new Promise((resolve,reject) => {

        // Check confirm password
        if(password !== confirmPassword) {
          reject({message: "Password doesn't match. Please try again."})
        }

        jwt.registerUser(displayName, email, password)
          .then(response => {
            // Redirect User
            router.push(router.currentRoute.query.to || '/');

            // Update data in localStorage
            localStorage.setItem("accessToken", response.data.accessToken);
            commit('UPDATE_USER_INFO', response.data.userData, {root: true});

            resolve(response)
          })
          .catch(error => { reject(error) })
      })
    },
    fetchAccessToken() {
      return new Promise((resolve) => {
        jwt.refreshToken().then(response => { resolve(response) })
      })
    }
}
