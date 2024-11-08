var logins = document.getElementsByClassName("nickname_input");
var passwords = document.getElementsByClassName("password_input");
var auth_btns = document.getElementsByClassName("auth_button");

auth_btns[0].addEventListener('click', function(e) {
    if (logins[0].value.length >= 5 && logins[0].value == "admin" &&
        passwords[0].value.length > 8 && passwords[0].value == "qazwsxedccool1") {
        e.preventDefault();
        let str = "";
        for (let i = 0; i < 6; i++) {
            str += Math.ceil(Math.random()*10);
        }
        if (prompt("Введите символы: " + str) == str) window.location.href = "index.html";
    }
});

auth_btns[1].addEventListener('click', function(e) {
    if (logins[1].value.length >= 5 && passwords[1].value.length > 8 &&
         passwords[1].value == passwords[2].value) {
        e.preventDefault();
        let str = "";
        for (let i = 0; i < 6; i++) {
            str += Math.ceil(Math.random()*10);
        }
        if (prompt("Введите символы: " + str) == str) window.location.href = "index.html";
    }    
});

while (!confirm("Желаете пройти авторизацию на сайте?")) {
    alert("Попробуй еще раз!");
}
alert("Круто!");
let answ1 = prompt("Если желаете войти введите \"Админ\" (Пр10)");
if (answ1 == "Админ") {
    answ2 = prompt("Введите пароль:");
    if (answ2 == "Я главный") {
        alert("Здравствуйте!");
    }
    else if (answ2 == null) {
        alert("Отменено");
    }
    else {
        alert("Неверный пароль");
    }
}
else if (answ1 == "" || answ1 == null) {
    alert("Отмененно");
}
else {
    alert("Я вас не знаю");
}


