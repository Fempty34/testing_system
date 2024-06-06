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
        window.location.replace("../tasks/tasks.html");
    }
});

function change_ferris(e){
    let s = e.getAttribute('src');
    var num = s.substr(s.length - 5)[0].charCodeAt(0) - 48;
    
    num += 1;
    if(num == 7){
        num = 1;
    }

    var f_string = "ferris/" + num + ".svg";
    e.setAttribute('src', f_string);
};
