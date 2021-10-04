import nodemailer from "nodemailer";
import config from "../config/default.js";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: config.MAIL_ACCOUNT,
        pass: config.MAIL_PASS,
    }
});

const sendEmailConfirmation = async(usrEmail, url) => {
    try {
        await transporter.sendMail({
            from: '"🔥🔥 Fire Dashboard 🔥🔥"  <firedashboard@manage.com>',
            to: usrEmail,
            subject: "Activar cuenta",
            html: `<h2>🔥 Bienvenido a Fire Dashboard 🔥</h2> <br>
            <p>Hola ${usrEmail}, sigue el enlace para activar tu cuenta en Fire Dashboard
            <a href=${url}>Activar cuenta</a></p>` 
        });
    } catch (error) {
        throw error;
    }
}

export {
    sendEmailConfirmation,
}