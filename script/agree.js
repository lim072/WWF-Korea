const allCheck = document.querySelector("#allAgreeCb");
const checks = document.querySelectorAll(".checks");
const atLeastCheckes = document.querySelectorAll(".atLeastChecke");
const check3 = document.querySelector("#agreeCb3");
const smsChecks = document.querySelectorAll(".smsCheck");
const form = document.querySelector("#agreement")
const submitBtn = document.querySelector("input[type=submit]");


function submitMain(e){
    e.preventDefault();

    let atLeastChecked = false;
    atLeastCheckes.forEach(function(check){
        if(check.checked++){
            atLeastChecked = true;
        }
    })
    
    if(atLeastChecked){
        form.submit();
    }else{
        alert("필수항목을 체크해주세요.")
    }
}    
form.addEventListener("submit", submitMain)


checks.forEach((check)=>{

    addEventListener("click",()=>{
        const checked = check.checked;

        if(!checked){
            allCheck.checked = false;
        }
    })
})

smsChecks.forEach((check)=>{

    addEventListener("click",()=>{
        const checked = check.checked;

        if(!checked){
            check3.checked = false;
        }
    })
})

allCheck.addEventListener("click", (e)=>{
    const checkValue = e.currentTarget.checked;

    checks.forEach((check)=>{
        check.checked = checkValue
    })
})

check3.addEventListener("click",(e)=>{
    const checkValue = e.currentTarget.checked;
    
    smsChecks.forEach((check)=>{
        check.checked = checkValue
    })

})
