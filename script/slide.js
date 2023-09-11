const slideBtn = document.querySelectorAll(".slideBtn>li");
const frames = document.querySelectorAll(".frame>.slide>li");

slideBtn.forEach((el, index) => {
    el.addEventListener('click', () => {
        for (let el of slideBtn) {
            el.classList.remove("on");
            slideBtn[index].classList.add("on");
        };
       
        const translateValue = -100 * index + '%';
        frames.forEach((frame)=> {
            frame.style.transform = `translateX(${translateValue})`
        })  
    });
});