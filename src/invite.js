const form = document.getElementsByTagName("form")[0];
const code = document.querySelector(".input");
const wa = document.querySelector(".wrong_code");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    if(code.value != "Some code"){
        wa.style.display = 'block';
        code.style.border = "solid 2px #E43A25"
    }
    else{
        window.location.replace("index.html");
    }
});
