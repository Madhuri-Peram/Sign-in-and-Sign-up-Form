let SignupButton = document.getElementById('SignupButton');
    let SigninButton = document.getElementById('SigninButton');
    let nameField = document.querySelector('.nameField');
    //let nameField = document.getElementById('nameField');
    let Title = document.getElementById('title');

    SigninButton.onclick = function(){
        nameField.style.maxHeight="0";
        Title.innerHTML = "Sign In";
        SignupButton.classList.add("disable");
        SigninButton.classList.remove("disable");
    }

    SignupButton.onclick = function(){
        nameField.style.maxHeight="60px";
        Title.innerHTML = "Sign Up";
        SignupButton.classList.remove("disable");
        SigninButton.classList.add("disable");
    }