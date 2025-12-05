function sendMail(){
    let parms={
        name :document.getElementById("name").value,
        subject :document.getElementById("subject").value,
        message :document.getElementById("message").value,


    }
    emailjs.send("service_jqa6bnq","template_3v34paf",parms).then(alert('Email sent!!'))
}