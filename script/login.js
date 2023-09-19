const form = document.querySelector("#logIn");
const idSave = document.querySelector("#saveCb")
const id = document.querySelector("#id")

form.addEventListener('submit', (e)=>{
    if(!isId("id")){
        e.preventDefault();
    }else{
        if(!isPwd("pw")) e.preventDefault();
    }
});

function isId(el){
    let input = form.querySelector(`[name=${el}]`);
    let txt = input.value;

    if(/@/.test(txt)){
        return true
     }else{
        alert("아이디와 비밀번호를 확인해주세요.")
        return false
     }
     
}

function isPwd(el){
    let input = form.querySelector(`[name=${el}]`);
    let txt = input.value;
    const num = /[0-9]/;
    const eng = /[a-zA-Z]/;
    const spc = /[~!@#$%^&*()_+?><]/;

    if( eng.test(txt) &&
        num.test(txt) &&
        spc.test(txt)){
        return true
     }else{
        alert("아이디와 비밀번호를 확인해주세요.")
        return false
     }
     
}


function setCookie(cookieName, value, exdays){
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var cookieValue = escape(value) + ((exdays==null) ? "" : "; expires=" + exdate.toGMTString());
    document.cookie = cookieName + "=" + cookieValue;
}

function deleteCookie(cookieName){
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() - 1);
    document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
}

function getCookie(cookieName) {
    cookieName = cookieName + '=';
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cookieName);
    var cookieValue = '';
    if(start != -1){
       start += cookieName.length;
       var end = cookieData.indexOf(';', start);
       if(end == -1)end = cookieData.length;
       cookieValue = cookieData.substring(start, end);
    }
    return unescape(cookieValue);
}

idSave.addEventListener("checked",(e)=>{
    if(e.checked == true){
        setCookie("id", document.logIn.id , 7);
    }else{
        setCookie("id", document.logIn.id , 0);
    }
})