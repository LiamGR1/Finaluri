let georgia = document.getElementById("georgia");
let english = document.getElementById("english");
let home = document.querySelector(".home");
let aboutus = document.querySelector(".aboutus");
let shop = document.querySelector(".shop");
let contact = document.querySelector(".contact");
let services = document.querySelector(".services");
let register = document.querySelector(".register");
let login = document.querySelector(".login");
let login1 = document.querySelector(".login1");
let email = document.querySelector(".email");
let password = document.querySelector(".password");




georgia.onclick = ()=>{
    setLanugage("georgia");
    localStorage.setItem("Lang","georgia");
};

english.onclick = ()=>{
    setLanugage("english");
    localStorage.setItem("Lang","english");
};

onload = ()=>{
    setLanugage(localStorage.getItem("Lang"));
}

function setLanugage(getLanuage){

    if(getLanuage === "english"){

        home.innerHTML = "Home";
        aboutus.innerHTML = "About Us";
        shop.innerHTML = "Shop";
        services.innerHTML = "Services";
        register.innerHTML = "Register";
        login.innerHTML = "Login";
        contact.innerHTML = "Contact";

        login1.innerHTML = "Login";
        email.innerHTML = "Login";
        password.innerHTML = "Password";


    }else if(getLanuage ==="georgia"){
        home.innerHTML = "მთავარი";
        aboutus.innerHTML = "ჩვენს შესახებ";
        shop.innerHTML = "  მაღაზია";
        services.innerHTML = " სერვისები";
        contact.innerHTML = "კონტაქტი";
        register.innerHTML = "რეგისტრაცია";
        login.innerHTML = "შესვლა";

        login1.innerHTML = "შესვლა";
        email.innerHTML = "მეილი";
        password.innerHTML = "პაროლი";

    }
}