import nodemailer from 'nodemailer'



const emailRegistro = async (datos) => {

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
  const {name, email, token} = datos
  await transport.sendMail({
    from: 'GameLoadX - JUEGOS',
    to: email,
    subject: 'Confirma tu cuenta en GameLoad',
    text: 'Confirma tu cuenta en GameLoad',
    html: `
      <div style='font-family: sans-serif;'> 
      <h2 style='color: #5800FF;'>Hola, ${name}! confirma el registro de tu cuenta en GameLoad</h2>
      <p>Tu cuenta está lista, solo debes confirmarla mediante el siguiente enlace: 
      <a href='${process.env.FRONTEND_URL}/confirmar/${token}'>Confirmar cuenta</a> </p>
      <p style='font-weight: bold;'> Si tu no creaste esta cuenta puedes ignorar este correo</p>  
      </div>
    `
  })
}
export default emailRegistro