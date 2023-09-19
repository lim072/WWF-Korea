const form = document.querySelector("#join");
const checkDuplicate = document.querySelector('.checkDuplicate');
const selectedDomain = document.getElementById("joinIdSelect");
const emailDomainInput = document.getElementById("emailDomain");

checkDuplicate.addEventListener("click",(e)=>{
    e.preventDefault;
    alert("사용 가능한 이메일입니다.")
})

selectedDomain.addEventListener('change',(e)=>{
    
    if(e.target.value !== "직접입력"){
        emailDomainInput.value = e.target.value
        emailDomainInput.disabled = true;
    }else{
        emailDomainInput.value = "";
        emailDomainInput.disabled = false;
    }
})


form.addEventListener('submit', (e)=>{
    if(!isPwd("pwd1","pwd2", 8)) e.preventDefault();
    if(!isId("id","domain")) e.preventDefault();
});

function isId(el1, el2){
    let emailId = form.querySelector(`[name=${el1}]`);
    let emailDomain = form.querySelector(`[name=${el2}]`);
    let emailIdVal = emailId.value;
    let emailDomainVal = emailDomain.value;
    const eng = /[a-z]/;

    const errMsgWrap = emailId.closest("span");

    function removeErrMsg(){
        const errMsg = errMsgWrap.querySelector("p");
        if(errMsg){
            errMsg.remove();
        }
    }
    function okErrMsg(){
        const errMsg = errMsgWrap.querySelector("span");
        if(errMsg){
            errMsg.remove();
        }
    }

    function addErrMsg(msg){
        const errMsg = document.createElement("p");
        errMsg.textContent = msg;
        errMsgWrap.append(errMsg);
    }

    if(emailIdVal != "" &&
       emailDomainVal != "" && 
       eng.test(emailId)
      ){
        okErrMsg();
        removeErrMsg();
       
        return true;
     }else{
         okErrMsg();
         removeErrMsg();
         
         let err = "이메일 형식에 맞게 입력하세요. ";
    
         addErrMsg(err);
         return false;
     }
     
}
function isPwd(el1, el2, len){
    let pwd1 = form.querySelector(`[name=${el1}]`);
    let pwd2 = form.querySelector(`[name=${el2}]`);
    let pwd1Val = pwd1.value;
    let pwd2Val = pwd2.value;
    
    const num = /[0-9]/;
    const eng = /[a-zA-Z]/;
    const spc = /[~!@#$%^&*()_+?><]/;

    const errMsgWrap = pwd2.closest("span");

    function removeErrMsg(){
        const errMsg = errMsgWrap.querySelector("p");
        if(errMsg){
            errMsg.remove();
        }
    }
    function okErrMsg(){
        const errMsg = errMsgWrap.querySelector("span");
        if(errMsg){
            errMsg.remove();
        }
    }

    function addErrMsg(msg){
        const errMsg = document.createElement("p");
        errMsg.textContent = msg;
        errMsgWrap.append(errMsg);
    }
    function addOkMsg(msg) {
        const errMsg = document.createElement("span");
        errMsg.textContent = msg;
        errMsgWrap.append(errMsg);
    }

    if(pwd1Val === pwd2Val &&
       pwd1Val.length >= len &&
       eng.test(pwd1Val) &&
       num.test(pwd1Val) &&
       spc.test(pwd1Val)){

        okErrMsg();
        removeErrMsg();
        let ok = "확인되었습니다."
        addOkMsg(ok);
        return true;
    }else{
        okErrMsg();
        removeErrMsg();
        
        let err = "비밀번호는 ";
        if(pwd1Val.length < len){
            err += `${len}글자 이상,`
        }
        if (!num.test(pwd1Val)) {
            err += "숫자를 포함,"
        }
        if (!eng.test(pwd1Val)) {
            err += "영어를 포함,"
        }
        if (!spc.test(pwd1Val)) {
            err += "특수문자를 포함,"
        }

        err += "동일하게 입력하세요"
        addErrMsg(err);
        return false;
    }
    
}