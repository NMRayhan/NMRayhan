window.addEventListener("load", function(){
    document.querySelector(".preloader").classList.add("opacity-0");

    setTimeout(function(){
        document.querySelector(".preloader").style.display="none";
    },1000)
})



const filterContainer = document.querySelector(".portfolio-filter"),
    filterbtn = filterContainer.children,
    totalfilterBtn = filterbtn.length,
    portfolioitems = document.querySelectorAll('.portfolio-item'),
    totalportfolioItem = portfolioitems.length;


for (let i = 0; i < totalfilterBtn; i++) {
    filterbtn[i].addEventListener('click', function () {
        filterContainer.querySelector('.active').classList.remove('active');
        this.classList.add('active')


        const filtervalue = this.getAttribute('data-filter');
        for (let k = 0; k < totalportfolioItem; k++) {

            if (filtervalue === portfolioitems[k].getAttribute('data-category')) {
                portfolioitems[k].classList.remove('hide');
                portfolioitems[k].classList.add('show');
            }
            else {
                portfolioitems[k].classList.remove('show');
                portfolioitems[k].classList.add('hide');
            }
            if (filtervalue === 'all') {
                portfolioitems[k].classList.remove('hide');
                portfolioitems[k].classList.add('show');
            }
        }


    })
}
// portfolio lightbox
const lightbox = document.querySelector(".lightbox"),
    lightboxClose = lightbox.querySelector(".lightbox-close"),
    lightboxImg = lightbox.querySelector(".lightbox-img"),
    lightboxText = lightbox.querySelector(".caption-text"),
    lightboxCounter = lightbox.querySelector(".caption-counter");

let itemIndex = 0;
for (let i = 0; i < totalportfolioItem; i++) {
    portfolioitems[i].addEventListener('click', function () {
        itemIndex = i;
        changeItem();
        toggleLightbox();
    })
}


function nextItem() {
    if (itemIndex === totalportfolioItem - 1) {
        itemIndex = 0;
    } else {
        itemIndex++;
    }
    changeItem();
}

function prevItem() {
    if (itemIndex === 0) {
        itemIndex = totalportfolioItem - 1;
    } else {
        itemIndex--;
    }
    changeItem();
}


function toggleLightbox() {
    lightbox.classList.toggle("open")
}


function changeItem() {
    imgScr = portfolioitems[itemIndex].querySelector(".portfolio-img img").getAttribute('src');
    lightboxImg.src = imgScr;
    lightboxText.innerHTML = portfolioitems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML = (itemIndex + 1) + " of " + totalportfolioItem;
}

// close light box

lightbox.addEventListener("click", function (Event) {
    if (Event.target === lightboxClose || Event.target === lightbox) {
        toggleLightbox();
    }
})

// Aside Navbar

const nav = document.querySelector(".navbar"),
    navlist = nav.querySelectorAll("li"),
    totalNavList = navlist.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navlist[i].querySelector("a");
    a.addEventListener("click", function () {

        // remove back section class
        removeBackSectionClass();
        
        for (let i = 0; i < totalNavList; i++) {
            if (navlist[i].querySelector("a").classList.contains("active")) {
                // add back Section class
                addbackSectionClass(i);
            }
            navlist[i].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);

        if(window.innerWidth < 1200){
            asideSectionTagglerBtn()
        }
    })
}
function addbackSectionClass(num){
    allSection[num].classList.add("back-section")
}
function removeBackSectionClass(){
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}
function updateNav(element){
    for (let i = 0; i < totalNavList; i++){
        navlist[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navlist[i].querySelector("a").getAttribute("href").split("#")[1]){
            navlist[i].querySelector("a").classList.add("active");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function(){
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSectionClass();
    addbackSectionClass(sectionIndex)
})

const navTaggleBtn = document.querySelector(".nav-toggle"),
    aside = document.querySelector(".Aside");

    navTaggleBtn.addEventListener("click", () =>{
        asideSectionTagglerBtn();
    })

    function asideSectionTagglerBtn(){
        aside.classList.toggle("open");
        navTaggleBtn.classList.toggle("open");
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.toggle("open");
        }
    }

    