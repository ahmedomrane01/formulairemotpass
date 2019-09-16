

function verif() {
    let name=document.getElementById("name").value;
    let psw=document.getElementById("psw").value;
    var l2 = /[A-Z]/
    var l1 = /[a-z]/
    var re = /[0-9]/;

    if(name=="" ){
        console.log("Name est vide")
    }
    else if(name.length > 10 ){
        console.log("Username trop long")
    }
    
     

    if(psw=="" ){
        console.log("Password est vide")
    }
    else if(psw.length < 8 ){
        console.log("Password trop court")
    }

    if ((re.test(psw)) && (l1.test(psw)) && (l2.test(psw)) ) {
      console.log(" Le mot de passe est fort");
    }




    if ((re.test(psw)) && (l1.test(psw)) && (!l2.test(psw)) ) {
      console.log(" Le mot de passe est faible");
      console.log(" Le mot de passe doit contenir des lettres majuscules et miniscules et des chiffres");
    }
    else if ((re.test(psw)) && (l2.test(psw)) && (!l1.test(psw)) ) {
      console.log(" Le mot de passe est moyen");
      console.log(" Le mot de passe doit contenir des lettres majuscules et miniscules et des chiffres");
    }
    else if ((!re.test(psw)) && (l2.test(psw)) && (l1.test(psw)) ) {
      console.log(" Le mot de passe est moyen");
      console.log(" Le mot de passe doit contenir des lettres majuscules et miniscules et des chiffres");
    }

    else if (!re.test(psw) || (!l2.test(psw)) || (!l1.test(psw))){ 
        console.log(" Le mot de passe est faible");
        console.log(" Le mot de passe doit contenir des lettres majuscules et miniscules et des chiffres");
      }


    

      if ( name !="" && name.length < 10 && psw.length > 8 &&  psw !=""){
        document.getElementById("res").innerHTML="<h1> resultat est</h1>"+ " User Name " +name + " password "+psw;
    }

    }




