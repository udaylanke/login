const signup = document.querySelector("#submit");
    
    signup.addEventListener("click" , (e) => {
        e.preventDefault();
        const firstname = document.querySelector("#firstname").value;
        const lastname = document.querySelector("#lastname").value;
        const username = document.querySelector("#username").value;
        const password = document.querySelector("#password").value;
        const confirmpassword = document.querySelector("#confirmpassword").value;
        const email = document.querySelector("#email").value;
        if(password == confirmpassword && firstname && lastname && username && email && password) {
            fetch(
                "http://127.0.0.1:8000/signup" +
                `?firstname=${firstname}&lastname=${lastname}&username=${username}&email=${email}&password=${password}` 
                )
                .then((data) => data.text())
                .then((value) => {
                    if(value)
                        window.location.href="../home.html"
                })
                .catch((e) => console.log(e));
                
        }
        else
        {
            alert("Password and Confirm password did not match");

        }
    });