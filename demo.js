var nodemailer = require("nodemailer")
var Transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"Enter your personal email",
        pass:"Enter your correct password"
    }
})
var mailOption={
    from:"Enter your personal email",
    to:"To whom you want to send",
    cc:"carbon copy",
    bcc:"blind carbon copy",
    subject:"Enter your subject",
    html:"<h3> Enter your msg  </h3>"
}
Transporter.sendMail(mailOption,async(error,info)=>{
   if(error){
       console.log(error)
   } 
   else{
       console.log("Mail has been sended")
   }
})




