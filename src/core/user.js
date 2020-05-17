import cache from 'core/cache';

class User {
    constructor() {
        this.userData = cache.get('user');
        console.log(this.userData, 'this.userData');
    }

    /**
     * Check if user is logged in
     * 
     * @returns {boolean}
     */
    isLoggedIn() {
        return this.userData !== null;
    }

    /**
     * Log the user in 
     * It will store the data in the storage engine i.e Local Storage
     * But will not make the ajax request
     * 
     * @param  {object} userData 
     * @returns {void}
     */
    login(userData) {
        this.userData = userData;
        cache.set('user', userData);
    }

    /**
     * Get user access token
     * 
     * @returns {string}
     */
    getAccessToken() {
        return this.userData.user.accessToken;
    }
}

export default new User();