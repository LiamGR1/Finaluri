let georgia = document.getElementById("georgia");
let english = document.getElementById("english");

let registrationform = document.querySelector(".registrationform");
let name = document.querySelector(".name");
let enterName = document.querySelector(".enterName");
let password1 = document.querySelector(".password1");
let passwordDontMatch = document.querySelector(".passwordDontMatch");
let confirmPassword = document.querySelector(".confirmPassword");
let passwordDontMatch1 = document.querySelector(".passwordDontMatch1");
let gender = document.querySelector(".gender");
let choose = document.querySelector(".choose");
let male = document.querySelector(".male");
let female = document.querySelector(".female");
let email1 = document.querySelector(".email1");
let enterMail = document.querySelector(".enterMail");
let phoneNumber = document.querySelector(".phoneNumber");
let enterNumber = document.querySelector(".enterNumber");
let country = document.querySelector(".country");
let city = document.querySelector(".city");


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
        registrationform.innerHTML = "Registration Form";
        name.innerHTML = "Name";
        enterName.innerHTML = "Enter Name";
        password1.innerHTML = "Password";
        passwordDontMatch.innerHTML = "Password Dont Match";
        confirmPassword.innerHTML = "Confirm Password";
        passwordDontMatch1.innerHTML = "Password Dont Match";
        gender.innerHTML = "Gender";
        choose.innerHTML = "Choose";
        male.innerHTML = "Male";
        female.innerHTML = "Female";
        email1.innerHTML = "Email";
        enterMail.innerHTML = "Enter Email";
        phoneNumber.innerHTML = "Number";
        enterNumber.innerHTML = "Enter Number";
        country.innerHTML = "Country";
        city.innerHTML = "City";



        home.innerHTML = "Home";
        aboutus.innerHTML = "About Us";
        shop.innerHTML = "Shop";
        services.innerHTML = "Services";
        register.innerHTML = "Register";
        login.innerHTML = "Login";
        contact.innerHTML = "Contact";
    }else if(getLanuage ==="georgia"){

        registrationform.innerHTML = "რეგისტრაციის ფორმა";
        name.innerHTML = "სახელი";
        enterName.innerHTML = "შეიყვანეთ სახელი";
        password1.innerHTML = "პაროლი";
        passwordDontMatch.innerHTML = "შეიყვანეთ პაროლი";
        confirmPassword.innerHTML = "დაადასტურე პაროლი";
        passwordDontMatch1.innerHTML = "პაროლი არ ემთხვევა";
        gender.innerHTML = "სქესი";
        choose.innerHTML = "აირჩიე";
        male.innerHTML = "მამრობითი";
        female.innerHTML = "მდედრობითი";
        email1.innerHTML = "მეილი";
        enterMail.innerHTML = "მიუთითე მეილი";
        phoneNumber.innerHTML = "ტელეფონის ნომერი";
        enterNumber.innerHTML = "შეიყვანე ნომერი";
        country.innerHTML = "ქვეყანა";
        city.innerHTML = "ქალაქი";

        home.innerHTML = "მთავარი";
        aboutus.innerHTML = "ჩვენს შესახებ";
        shop.innerHTML = "  მაღაზია";
        services.innerHTML = " სერვისები";
        contact.innerHTML = "კონტაქტი";
        register.innerHTML = "რეგისტრაცია";
        login.innerHTML = "შესვლა";

    }
}