function close_al() {
    var greet = document.getElementById('greetingBox');
    setTimeout(() => {
            greet.style.opacity = "0";
            greet.style.top = "-100px";
            greet.style.display = "none"
        },
        50);
}

function alwin(title, text) {
    var greetingBox = document.createElement("div");
    var greeting = document.createElement("div");
    var bodyh = document.querySelector("body");
    var headh = document.querySelector("head"); //规定Head、Body标签
    var al_css = document.createElement("link"); //创建依赖

    al_css.href = "./dist/alert-win10.min.css"; //DOM属性
    al_css.setAttribute("rel", "stylesheet"); //添加属性    
    headh.appendChild(al_css); //添加到Head、Body后

    greetingBox.setAttribute("id", "greetingBox");
    greeting.setAttribute("id", "greeting");

    bodyh.appendChild(greetingBox);
    greetingBox.appendChild(greeting);
    
    if (greetingBox.style.display != "block") {

        greeting.innerHTML = "<p class='al_h2'>" + title + "</p>" + "<span class='al_text'>" + text + "</span>" + "<a class='al_btn' id='al_btn_close' onclick='close_al()'>" + "关闭" + "</a>";

        greetingBox.style.display = "block";
        setTimeout(() => {
                greeting.style.opacity = "1";
                greeting.style.top = "0px";
            },
            50);
    }
}