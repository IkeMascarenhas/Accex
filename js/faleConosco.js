const feedback = document.getElementById("Feedback")
const notify = document.querySelector(".notify")

feedback.addEventListener('click',()=>{
    notify.classList.toggle("show-notify")
})