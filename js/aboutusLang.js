let georgia = document.getElementById("georgia");
let english = document.getElementById("english");
let aboutus1 = document.querySelector(".aboutus1");
let readmore = document.querySelector(".readmore");

let home = document.querySelector(".home");
let aboutus = document.querySelector(".aboutus");
let shop = document.querySelector(".shop");
let contact = document.querySelector(".contact");
let services = document.querySelector(".services");
let register = document.querySelector(".register");
let login = document.querySelector(".login");

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
        aboutus1.innerHTML = "About us";
        readmore.innerHTML = "Read more";
        home.innerHTML = "Home";
        aboutus.innerHTML = "About Us";
        shop.innerHTML = "Shop";
        services.innerHTML = "Services";
        register.innerHTML = "Register";
        login.innerHTML = "Login";
        contact.innerHTML = "Contact";
}else if(getLanuage ==="georgia"){
    aboutus1.innerHTML = "ჩვენს შესახებ";
    readmore.innerHTML = "გაიგეთ მეტი";

        home.innerHTML = "მთავარი";
        aboutus.innerHTML = "ჩვენს შესახებ";
        shop.innerHTML = "  მაღაზია";
        services.innerHTML = " სერვისები";
        contact.innerHTML = "კონტაქტი";
        register.innerHTML = "რეგისტრაცია";
        login.innerHTML = "შესვლა";
    
}
}
