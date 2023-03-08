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
      <div 
        style='background-color: #000114;
        font-family: sans-serif; 
        display: flex; 
        flex-direction:column; 
        justify-content: center; 
        align-items: center; '
       > 
        <img 
          style='object-fit: cover; 
          width:100%; 
          height: 250px;' 
          src='https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
          alt='img' 
          /> 
        <div style='padding-top: 2rem;'>
          <h1 
            style='color: #5800FF; 
            font-size: 50px; 
            text-align: center;'
            >
            Bienvenido GameLoader!
          </h1>
          <h2 style='color: #eee; font-size: 22px; text-align: center;'>Hola, ${name}! confirma el registro de tu cuenta en GameLoad</h2>
          <p style='color: #d9d9d9; font-size: 16px; text-align: center;'>Tu cuenta está lista, solo debes confirmarla mediante el siguiente enlace: 
          <a href='${process.env.FRONTEND_URL}/confirmar/${token}' style='color: #fff;'>Confirmar cuenta</a> </p>
          <p style='font-weight: bold;'> Si tu no creaste esta cuenta puedes ignorar este correo</p>  
        </div>
        <span style='font-size: 14px; color: grey; padding-bottom: 2rem;' > -Atte: Gameload </span>
      </div>
    `
  })
}
export default emailRegistro