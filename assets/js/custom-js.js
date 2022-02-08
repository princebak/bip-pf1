

const formc = document.getElementById("contact-form");
formc.onsubmit = (e) => {
    
    e.preventDefault();
    //emailjs.sendForm(serviceID, templateID, templateParams, userID);
    emailjs.sendForm('service_tmzhq1x', 'template_4pqo3qo', formc, 'user_wizEyP4EFwueS4Ez77MTr');
    alert("yupi")

}