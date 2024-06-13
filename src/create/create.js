console.log("Start");
function printFiles(e) { 
    const files = e.target.files;   // получаем все выбранные файлы  
    let output = "";
    for (let i = 0; i < files.length; i++) {        // Перебираем все выбранные файлы   
        const file = files[i];      // Получаем файл 
        console.log(file);
        output += file.name;
    } 
    let input = document.querySelector(".input-file-text")
    input.innerHTML = output;
    input.style.opacity = "1";
}
document.getElementById("files").addEventListener("change", printFiles);