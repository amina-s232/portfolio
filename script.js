function sendMail(){
    let parms={
        name :document.getElementById("name").value,
        subject :document.getElementById("subject").value,
        message :document.getElementById("message").value,


    }
    emailjs.send("service_id","template_id",parms).then(alert('Email sent!!'))
}
