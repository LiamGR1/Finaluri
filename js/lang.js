let georgia = document.getElementById("georgia");
let english = document.getElementById("english");
let home = document.querySelector(".home");
let aboutus = document.querySelector(".aboutus");
let shop = document.querySelector(".shop");
let contact = document.querySelector(".contact");
let services = document.querySelector(".services");
let register = document.querySelector(".register");
let login = document.querySelector(".login");
let productsale = document.querySelector(".productsale");
//Login
let login1 = document.querySelector(".login1");
let login2 = document.querySelector(".login2");
let email = document.querySelector(".email");
//contact
let findus = document.querySelector(".findus");
let  callus= document.querySelector(".callus")
let  emailus = document.querySelector(".emailus")
let  address = document.querySelector(".address")
let  sendmessage = document.querySelector(".sendmessage")
let  contactus = document.querySelector(".contactus")

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
            productsale.innerHTML = "Product sale";
            //login
            login1.innerHTML = "Login";
            login2.innerHTML = "Login";
            email.innerHTML = "Email";
    //contact
        contactus.innerHTML = "Contact Us";
        findus.innerHTML = "Find Us";
        callus.innerHTML = "Call Us";
        emailus.innerHTML = "Email Us";
        address.innerHTML = "Address";
        sendmessage.innerHTML = "Send Massage";
	}else if(getLanuage ==="georgia"){
		home.innerHTML = "მთავარი";
		aboutus.innerHTML = "ჩვენს შესახებ";
		shop.innerHTML = "  მაღაზია";
		services.innerHTML = " სერვისები";
		contact.innerHTML = "კონტაქტი";
		register.innerHTML = "რეგისტრაცია";
		login.innerHTML = "შესვლა";
        productsale.innerHTML = "ფასდაკლება პროდუქტზე";
        //login
        login1.innerHTML = "შესვლა";
        login2.innerHTML = "შესვლა";
        email.innerHTML = "მეილი";
    //  contact
        contactus.innerHTML = "დაგვიკავშირდით";
        findus.innerHTML = "გვიპოვეთ";
        callus.innerHTML = "დაგვიკავშირდით";
        emailus.innerHTML = "დაგვეკონტაკტეთ";
        address.innerHTML = "მისამართი";
        sendmessage.innerHTML = "მოგვწერეთ";
        
	}
}


