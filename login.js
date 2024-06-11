const login = document.querySelector("#submit");
    
    
    login.addEventListener("click" , (e) => {
        e.preventDefault();
        const username = document.querySelector("#username").value;
        const password = document.querySelector("#password").value;
        
        console.log(username);
        console.log(password);
        
        fetch(
            "http://127.0.0.1:8000/login" +
            `?username=${username}&password=${password}` 
            )
            .then((data) => data.text())
            .then((value) => {
                if(value=="success") {
                    alert("Login Successfull!!!");
                    window.location.href="home.html";
                }
                else  {
                        alert("Login Failed")
                    }  
                })
                .catch((e) => console.log(e));
                

            });       