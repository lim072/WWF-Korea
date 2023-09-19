const form = document.querySelector("#logIn");

form.addEventListener('submit', (e)=>{
    if(!isId("id")) e.preventDefault();
 
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
