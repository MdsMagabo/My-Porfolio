
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})


function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "michaelmagabo06gmail.com",
        Password : "C73890982E5F298A799073AE88718AEBE67C",
        To : 'michaeldavesammagabo@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Inquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
