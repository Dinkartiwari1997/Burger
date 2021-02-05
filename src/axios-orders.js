import axios from 'axios';


const instance=axios.create({
    baseURL: "https://my-app-f4b65-default-rtdb.firebaseio.com/"
});

export default instance;