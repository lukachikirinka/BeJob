function checkPassword(form) {

    password1 = form.clave.value;
    password2 = form.confirm.value;

    // If password not entered
    if (password1 == password2) {
        
        alert("Cuenta creada correctamente");
        return true;
    }
    
}


function check_name (nombre){
    if( nombre.value.length>0){
        nombre.className = 'input-box-valid';
    }
    else{
        nombre.className = 'input-box-invalid';
    }
}

function check_email (email, msg_email){
    let pattern = /[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if(! pattern.test(email.value) ){
        msg_email.className = "input-msg-error";
        email.className = 'input-box-invalid';
    }
    else{
        msg_email.className = "input-msg-correct";
        email.className = 'input-box-valid';
    }
}

function check_clave(clave, more_pwd){
    if(clave.value.length  <8 ){
        more_pwd.className = "input-msg-error";
        clave.className='input-box-invalid';
    }
    else{
        more_pwd.className = "input-msg-correct"; 
        clave.className = 'input-box-valid';
    }
}

function check_pswd(clave, confirm, same_pwd){
        //alert("entrando1");
        password1 = clave.value;
    password2 = confirm.value;
        // If password not entered
    if (password1 != password2) {
        same_pwd.className = "input-msg-error";
        confirm.className = 'input-box-invalid';
    }
    else{
        same_pwd.className = "input-msg-correct";
        confirm.className = 'input-box-valid';
    }
}