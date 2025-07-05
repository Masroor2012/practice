setTimeout(() => {
            let anim = document.getElementById('load-anim')
            anim.style.display = 'none'
}, 2500)

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');



form.addEventListener('submit', (event) => {
    event.preventDefault();
    let user = document.getElementById('val1')
    let email = document.getElementById('val2').value
    let password = document.getElementById('val3').value
    let error = document.getElementById('erroutput')
    let userPassword = localStorage.getItem('email')



    // RECOGNIZATION FUNCTION

    if(password == userPassword){
        // Authenticate user ID loading animation

        document.getElementById('auth-user-id-load-cont').style.display = 'flex';
        let percent = 0;
        const text = document.getElementById("percentage");
        const status = document.getElementById("status");

        document.getElementById('overall-cont').style.display = 'none';

        const statusMessages = {
            20: "Authenticating user ID...",
            60: "Checking password...",
            90: "Re-cheking..."
        };

        const interval = setInterval(() => {
            if (percent <= 100) {
            text.textContent = percent + "%";

            // Update status message if one is defined for the current percent
            if (statusMessages[percent]) {
                status.textContent = statusMessages[percent];
            }

            percent += 5;
            } else {
            status.textContent = "Recognized!";
            clearInterval(interval);
            }
        }, 1000);

        localStorage.setItem('name', `${user.value}`)


        setTimeout(() => {
            document.getElementById('bar-cont').style.display = 'none'
            document.getElementById('hidden-btn').style.display = 'block'
        }, 24500)
    }else{
        error.style.display = 'block'
        error.innerHTML = `<h1 class="errTxt">Incorrect password </h1><button class="sub" onclick="document.getElementById('erroutput').style.display = 'none'">Try again</button>`
    }

    email = ''
    password = ''
})