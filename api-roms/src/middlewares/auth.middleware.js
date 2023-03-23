import jwt from 'jsonwebtoken'
const checkAuth = async (req, res, next) => {
  // let token;
  // if (
  //   req.headers.authorization &&
  //   req.headers.authorization.startsWith("Bearer")
  // ) {
  //   try {
  //     token = req.headers.authorization.split(' ')[1]
  //     const decoded = jwt.verify(token, process.env.JWT_SECRET)
  //   //  req.user = await User.findById(decoded.id).select('-password -token -isConfirmed')
  //     return next()
  //   } catch (error) {
  //    return res.status(403).json({msg: 'Token no valido'})      
  //   }
  // }

  // if(!token) return res.status(403).json({msg: 'Token no valido o inexistente'})
  // next();
};
export default checkAuth;