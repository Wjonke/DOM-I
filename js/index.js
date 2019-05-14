const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },

  "cta": {
    "h1": " DOM<br>Is<br>Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },

  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",

    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//////grabs single element in the left side and adds in the content listed at the end
document.querySelector("h1").innerHTML = siteContent.cta["h1"];
document.querySelector("button").innerHTML = siteContent.cta["button"];
/////////////////////////////////////////////////////////////////////


let navItem = document.querySelectorAll("a");
navItem[0].textContent = siteContent.nav["nav-item-1"]
navItem[1].textContent = siteContent.nav["nav-item-2"]
navItem[2].textContent = siteContent.nav["nav-item-3"]
navItem[3].textContent = siteContent.nav["nav-item-4"]
navItem[4].textContent = siteContent.nav["nav-item-5"]
navItem[5].textContent = siteContent.nav["nav-item-6"]

//////////calls up the "nav items"
 let nav = document.querySelector('nav');
/////////////////////////////////

 /////////////////////adds the 2 new buttons
const link = document.createElement('a');
link.innerHTML = 'Blog'
nav.appendChild(link);

const link2 = document.createElement('a');
link2.innerHTML = 'Sign In'
nav.appendChild(link2);
/////////////////////////////////////////////

//calls up the old nav items and then adds the new ones so they will now also apply to our "green" function below.
navItem = document.querySelectorAll("a");
//////////////////////////////////////////////

//This works but is not effective for long code
// document.querySelectorAll('a');
// navItem[0].style.color = "green";
// navItem[1].style.color = "green";
// navItem[2].style.color = "green";
// navItem[3].style.color = "green";
// navItem[4].style.color = "green";
// navItem[5].style.color = "green";
// navItem[6].style.color = "green";
// navItem[7].style.color = "green";


//quicker way is .forEach only usable with arrays or queryselectorall
 let green = document.querySelectorAll('a');
 green.forEach(aGreen =>{
    aGreen.style.color = "green"
 }); 
/////////////////////////////////////////////////////////////////////


/////assigns the src to each img from the html
document.getElementById("cta-img").src = siteContent.cta["img-src"];
document.getElementById("middle-img").src = siteContent["main-content"]["middle-img-src"];
//////////////////////////////////////////////////////////////


//grabs all h1 elements and assigns the content one at a time cascading down the document
let mainh4 = document.querySelectorAll('h4');
mainh4[0].textContent = siteContent["main-content"]["features-h4"];
mainh4[1].textContent = siteContent["main-content"]["about-h4"];
mainh4[2].textContent = siteContent["main-content"]["services-h4"];
mainh4[3].textContent = siteContent["main-content"]["product-h4"];
mainh4[4].textContent = siteContent["main-content"]["vision-h4"];
mainh4[5].textContent = siteContent["contact"]["contact-h4"]
//////////////////////////////////////////////////////////////////////////////////////////


//grabs all p elements and assigns the content one at a time cascading down the document
let MainP = document.querySelectorAll('p');
MainP[0].textContent = siteContent["main-content"]["features-content"];
MainP[1].textContent = siteContent["main-content"]["about-content"];
MainP[2].textContent = siteContent["main-content"]["services-content"];
MainP[3].textContent = siteContent["main-content"]["product-content"];
MainP[4].textContent = siteContent["main-content"]["vision-content"];
MainP[5].innerHTML = "123 Way 456 Street<br>Somewhere, USA" //use .innerHTML so it doesnt display the <br>, .innerText will display exactly as written
MainP[6].textContent = siteContent["contact"]["phone"]
MainP[7].textContent = siteContent["contact"]["email"];
MainP[8].textContent = siteContent["footer"]["copyright"];
////////////////////////////////////////////////////////////////////////

