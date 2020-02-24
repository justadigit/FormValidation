(()=>console.log("Hello JS!"))();
const form = document.querySelector("#form-validate");
const [namePattern,emailPattern,passwordPattern] = [/(^[a-z]{5})[a-zA-Z0-9]{2,15}$/,/((^[a-z]{5,})[a-zA-Z0-9]+\@[a-z]{5}\.[a-z]{2,5})/,/.[a-zA-Z0-9]{7,}/];
let [namevar,emailvar,passwordvar]=[false];
form.name.addEventListener('keyup',e=>{
    if(!namePattern.test(e.target.value)){
        form.name.classList.add("is-invalid");
        namevar=false;
        getable();
    }else{
        form.name.classList.remove("is-invalid");
        namevar=true;
        getable();
    }
});
form.email.addEventListener('keyup',e=>{
    if(!emailPattern.test(e.target.value)){
        form.email.classList.add("is-invalid");
        emailvar=false;
        getable();
    }else{
        form.email.classList.remove("is-invalid");
        emailvar=true;
        getable();
    }
});
form.password.addEventListener('keyup',e=>{
    if(!passwordPattern.test(e.target.value)){
        form.password.classList.add("is-invalid");
        passwordvar=false;
        getable();
    }else{
        form.password.classList.remove("is-invalid");
        passwordvar=true;
        getable();
    }
});
let getable = ()=>{
    if(namevar && emailvar && passwordvar)form.btns.removeAttribute("disabled","");
    else form.btns.setAttribute("disabled","");
}