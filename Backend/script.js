// ===============================
// MOBILE NAVBAR TOGGLE
// ===============================

const mobileToggle = document.getElementById("mobileToggle")
const navbar = document.getElementById("navbar")

if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
        navbar.classList.toggle("mobile-open")
    })
}


// ===============================
// LOGIN FUNCTION
// ===============================

const loginForm = document.getElementById("loginForm")

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault()

        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const loginBtn = document.getElementById("loginBtn")
        const resultDiv = document.getElementById("loginResult")

        loginBtn.innerText = "Signing in..."

        fetch("http://localhost:3000/login", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({ email, password })

        })
            .then(res => res.json())
            .then(data => {

                loginBtn.innerText = "Sign In"

                resultDiv.innerText = data.message

                if (data.success) {

                    resultDiv.style.color = "green"

                    setTimeout(() => {
                        window.location.href = "index.html"
                    }, 1200)

                } else {

                    resultDiv.style.color = "red"

                }

            })
            .catch(err => {

                loginBtn.innerText = "Sign In"

                resultDiv.innerText = "Server error. Try again."
                resultDiv.style.color = "red"

            })

    })

}


// ===============================
// GOOGLE LOGIN (DEMO)
// ===============================

const googleBtn = document.getElementById("googleLogin")

if (googleBtn) {

    googleBtn.addEventListener("click", () => {

        alert("Google authentication will be integrated later.")

    })

}


// ===============================
// GITHUB LOGIN (DEMO)
// ===============================

const githubBtn = document.getElementById("githubLogin")

if (githubBtn) {

    githubBtn.addEventListener("click", () => {

        alert("GitHub authentication will be integrated later.")

    })

}


// ===============================
// FEATURE CARD HOVER ANIMATION
// ===============================

const featureCards = document.querySelectorAll(".feature-card")

featureCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)"
        card.style.transition = "0.3s"

    })

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)"

    })

})


// ===============================
// HERO IMAGE FLOAT EFFECT
// ===============================

const heroImg = document.getElementById("heroImg")

if (heroImg) {

    window.addEventListener("mousemove", (e) => {

        const x = (window.innerWidth / 2 - e.pageX) / 40
        const y = (window.innerHeight / 2 - e.pageY) / 40

        heroImg.style.transform = `translate(${x}px, ${y}px)`

    })

}