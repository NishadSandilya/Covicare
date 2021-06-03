import { motion } from 'framer-motion';
import useRenders from '../../useRenders';

const Cases = () => {
    useRenders('Cases');
    return (
        <motion.div initial={{ opacity: 0, transform: 'translateX(50px)' }} animate={{ opacity: 1, transform: 'translateX(0px)' }} exit={{ opacity: 0 }} className="cases">
            
        </motion.div>
    )
}

export default Cases;