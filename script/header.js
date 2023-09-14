const gnb = document.querySelector('.gnb');
const sub = gnb.querySelectorAll('.sub>li');
const subBg = document.querySelector('.subBg');
const moGnb = document.querySelector(".moGnb>li>a");
const moSub = moGnb.querySelectorAll('.sub>li');


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

moGnb.addEventListener("mouseenter", ()=>{
    moSub.forEach((moSub)=>{
        moSub.style.height = "30px";
    })
})

moGnb.addEventListener("mouseleave", ()=>{
    moSub.forEach((moSub)=>{
        moSub.style.height = "0px";
    })
})

moGnb