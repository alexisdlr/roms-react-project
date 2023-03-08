import { motion } from 'framer-motion'
import './Alert.scss'
function Alert({err}) {
  return (
    <div className='Alerta' >
        <motion.p
        animate={{opacity: [0,1]}}
        exit={{opacity: 0}}
        
        className={`${err.error ? 'alerta-error' :'alerta'}`}>{err.msg}</motion.p>
    </div>
  )
}

export default Alert