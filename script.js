const form = document.querySelector('form');
const email= document.getElementById('email');
const invalid = document.querySelector('.open');

form.addEventListener("submit",e=>{
    e.preventDefault();
    if(email.value==""){
        invalid.classList.add('error');
    }
    else{
        invalid.classList.remove('error');
        email.value="";
        alert('congo dostt!! mere se ban gaya...');
        
    }
})