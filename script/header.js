const gnb = document.querySelector('.gnb');
const sub = gnb.querySelectorAll('.sub>li');
const subBg = document.querySelector('.subBg');

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