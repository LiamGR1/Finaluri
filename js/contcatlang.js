let georgia = document.getElementById("georgia");
let english = document.getElementById("english");
let findus = document.querySelector(".findus");
let  callus= document.querySelector(".callus")
let  emailus = document.querySelector(".emailus")
let  address = document.querySelector(".address")
let  sendmessage = document.querySelector(".sendmessage")
let  contactus = document.querySelector(".contactus")
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
        contactus.innerHTML = "Contact Us";
        findus.innerHTML = "Find Us";
        callus.innerHTML = "Call Us";
        emailus.innerHTML = "Email Us";
        address.innerHTML = "Address";
        sendmessage.innerHTML = "Send Massage";

        home.innerHTML = "Home";
        aboutus.innerHTML = "About Us";
        shop.innerHTML = "Shop";
        services.innerHTML = "Services";
        register.innerHTML = "Register";
        login.innerHTML = "Login";
        contact.innerHTML = "Contact";
    }else if(getLanuage ==="georgia"){
        home.innerHTML = "მთავარი";
        aboutus.innerHTML = "ჩვენს შესახებ";
        shop.innerHTML = "  მაღაზია";
        services.innerHTML = " სერვისები";
        contact.innerHTML = "კონტაქტი";
        register.innerHTML = "რეგისტრაცია";
        login.innerHTML = "შესვლა";
    contactus.innerHTML = "დაგვიკავშირდით";
    findus.innerHTML = "გვიპოვეთ";
    callus.innerHTML = "დაგვიკავშირდით";
    emailus.innerHTML = "დაგვეკონტაკტეთ";
    address.innerHTML = "მისამართი";
    sendmessage.innerHTML = "მოგვწერეთ";
    
}
}