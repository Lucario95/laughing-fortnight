function validate() {
    if (!validatePresence("nome")){
        return (false); 
    }
    validateName("nome");
    if (!validatePresence("cognome")){
        return (false); 
    }
    validateName("cognome");
    if (!validatePresence("mail")){
        return (false); 
    }
    if (!validatePresence("password")){
        return (false); 
    }
    if (!validatePresence("password2")){
        return (false); 
    }
    if(!validateMail()){
        window.alert("Attenzione, il campo e-mail non corrisponde ad un indirizzo valido");
        return (false);
    }
    if (!validatePassword()){
        return (false);
    }
    if (!validateDate()){
        window.alert("Attenzione, il campo data non \xE8 corretto");
        return (false);
    }
    window.alert("Iscrizione valida e completata! :)")
    return (true);
}

function validatePresence(tagId){
    var nome=document.getElementById(tagId).value;
    if(!nome){
        window.alert("Attenzione, il campo "+ tagId + " " + "\xE8 mancante");
        return (false);
    }
    return(true);
}

function validateName(tagId){
    var nome=document.getElementById(tagId).value;
    if(!/^[a-zA-Z]+$/.test(nome)){
        window.alert("Attenzione, il campo "+ tagId +  " contiene numeri o simboli!")
        return (false);
    }
    return(true);
}

function validateMail(){
     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var mail=document.getElementById("mail").value;
    return (re.test(mail));
}

function validatePassword(){
    var pass1=document.getElementById("password").value;
    var pass2=document.getElementById("password2").value;
    if(pass1!=pass2){
        window.alert("Attenzione, le due password sono diverse!");
        return (false);
    }
    return(true);
}

function validateDate(){
    var date=document.getElementById("data").value;
    var count=0;
    var year="", day="", month="";
    var today=new Date();
    for(i=0; i<date.length;i++){
        if(date.charAt(i)=="-"){
            count++;
            i++;
        }
        if(count===0){
            year=year+date.charAt(i);
        }
        if(count===1){
            month=month+date.charAt(i);
        }
        if(count===2){
            day=day+date.charAt(i);
        }
    }
    /*console.log(day+ "/"+ month+"/"+year);
    console.log(today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear())*/
    if(parseInt(year)>today.getFullYear()){
          return (false);
    }
    if(parseInt(year)==today.getFullYear() && parseInt(month)>(today.getMonth()+1)){
          return (false);
    }
    if(parseInt(year)==today.getFullYear() && parseInt(month)==(today.getMonth()+1) && parseInt(day)>today.getDate()){
        return (false);
    }
    if(parseInt(year)<1910){
        return (false);
    }
    return (true);
}