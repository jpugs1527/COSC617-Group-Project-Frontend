async function Authenticate() {
    return await fetch(process.env.REACT_APP_API_URL + "/user/authenticate?token=" + localStorage.getItem('Turdo_Token'), {
        method: "GET",
        headers : { 
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        if (response.isLoggedIn) {
            // delete token if we lose user information
            if (localStorage.getItem('user_info') == "") {
                localStorage.setItem('Turdo_Token', "");
            }            
        } else {
            localStorage.setItem("Turdo_Token", "");
            localStorage.setItem("user_info", "");
        }
        return response;
    });
}

export default Authenticate;