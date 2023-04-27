(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        
        document.body.classList.toggle("light-mode"); 

        
    })
    
})();


const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "a Web Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "a Programmer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "a Blogger";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);


function Mail(){


 let name = document.getElementById('name').value;
 let email = document.getElementById('email').value;
 let subject = document.getElementById('subject').value;
 let msg = document.getElementById('msg').value;


 Email.send({
    SecureToken : "da196d42-198e-4915-be9d-a3cdefd9c317",
    To : 'ubaswan@gmail.com',
    From : "officialub666@gmail.com",
    Subject : "Mail from Contact Form",
    Body : "Name: " + name + "<br> Email: " + email + "<br> Subject: " + subject + "<br> Message: " + msg
}).then(
//   message => alert(message)
        alert("Message Has Been Sent")
);


}


//


let btn = document.querySelector("button");

btn.addEventListener("click", active);

function active() {
  btn.classList.toggle("is_active");
}