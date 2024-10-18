import { makeAutoObservable } from 'mobx';
import { loginUser, postUser } from '../src/services/userService';

class UserStore {
    username = '';
    email = '';
    isAuth = false;
    token = '';

    constructor() {
        makeAutoObservable(this);
        this.checkAuth();
    }

    logoutUser() {
        this.isAuth = false;
        this.username = '';
        this.email = '';
        this.token = '';
        localStorage.removeItem('userData');
    }

    addUser(userInfo) {
        postUser(userInfo);
    }

    authUser(userInfo) {
        loginUser(userInfo).then((response) => {
            if (response) {
                this.username = response.username;
                this.isAuth = true;
                this.email = response.email;
                this.token = response.token;
                
                localStorage.setItem(
                    'userData',
                    JSON.stringify({
                        token: response.token
                    })
                );
            }
        });
    }

    checkAuth() {
        const userData = localStorage.getItem('userData');
        if (userData) {
            const { username, email, token } = JSON.parse(userData);
            this.username = username;
            this.email = email;
            this.token = token;
            this.isAuth = true; 
        }
    }
}

const userStore = new UserStore();
export default userStore;
