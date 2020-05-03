import axios from 'axios'

async function Authenticate() {
    return await axios.get(process.env.REACT_APP_API_URL + "/user/authenticate?token=" + localStorage.getItem('Turdo_Token'))
    .then(res => {
        if (res.data.isLoggedIn) {
            // delete token if we lose user information
            if (localStorage.getItem('user_info') == "") {
                localStorage.setItem('Turdo_Token', "");
            }
        } else {
            localStorage.setItem("Turdo_Token", "");
            localStorage.setItem("user_info", "");
        }
        return res;
    });
}

export default Authenticate;