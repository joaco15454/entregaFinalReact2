export const base_url = "http://localhost:5008/api"

const getTokenFromLocalStorage = localStorage.getItem("customer")
? JSON.parse (localStorage.getItem("customer")) : null;

export const config = {
    header : {
        Authorization : `Bearer ${
            getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
        } `,
        Accept: "aplication/json",
    },

}