const link = document.querySelectorAll(".alternate-style"),
    totallinks = link.length;
function setActiveStyle(color){
    for(let i=0; i<totallinks; i++){
        if(color === link[i].getAttribute("title")){
            link[i].removeAttribute("disabled");
        }
        else{
            link[i].setAttribute("disabled", "true");
        }
    }
}

    // bodyskin

    const bodyskin = document.querySelectorAll('.body-skin'),
        totalBodySkin = bodyskin.length;

        for(let f=0; f<totalBodySkin; f++){
            bodyskin[f].addEventListener("change", function(){
                if(this.value === "dark"){
                    document.body.className = "dark";
                }else{
                    document.body.className = "";
                }
            })
        }

document.querySelector(".toggle-style-switcher").addEventListener("click",() =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})