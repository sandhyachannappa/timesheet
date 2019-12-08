import axios from 'axios';

export class UserService {
    
    getUsers() {
        return axios.get('assets/demo/data/user.json')
                .then(res => res.data.data);
    }

}