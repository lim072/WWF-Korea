const gnb = document.querySelector('.gnb');
const sub = gnb.querySelectorAll('.sub>li');
const subBg = document.querySelector('.subBg');
const moGnbNav = document.querySelector(".moGnb")
const moGnb = document.querySelectorAll(".moGnb>li");
const moBtnOff = document.querySelector(".moBtnOff");
const moBtnOn = document.querySelector(".moBtnOn");

gnb.addEventListener("mouseenter", ()=>{
    sub.forEach((sub)=>{
        sub.style.height = "40px";
    })

    subBg.style.height = "210px";
})

gnb.addEventListener("mouseleave", ()=>{
    sub.forEach((sub)=>{
        sub.style.height = "0px";
    })

    subBg.style.height = "0px";
})


moGnb.forEach((item)=>{
    item.addEventListener("mouseenter", (e)=>{
        if (e.target.querySelector('ul') === null) {
            return;
        }
        let moSub = item.querySelector(".sub");
        let moSubs = moSub.querySelectorAll("li");
        moSubs.forEach((el)=>{
            el.style.height = "40px";
        })
        
        
    })
})

moGnb.forEach((item)=>{
    item.addEventListener("mouseleave", (e)=>{
        if (e.target.querySelector('ul') === null) {
            return;
        }
        let moSub = item.querySelector(".sub");
        let moSubs = moSub.querySelectorAll("li");
        moSubs.forEach((el)=>{
            el.style.height = "0px";
        })
    })
})

moBtnOff.addEventListener("click", ()=>{
    if(moBtnOn.style.opacity == 0){
        moGnbNav.style.left = "0";
        moBtnOff.style.opacity = "0"
        moBtnOn.style.opacity = "1";
    }else{
        moGnbNav.style.left = "-150px";
        moBtnOff.style.opacity = "1"
        moBtnOn.style.opacity = "0";
    }
})



