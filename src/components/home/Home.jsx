import useRenders from '../../useRenders';
import Logo from './Logo';
import { motion } from 'framer-motion';

const Home = () => {
    useRenders('Home');
    return (
        <motion.div className="home" initial = {{opacity: 0, transform: 'translateX(-100px)'}} animate = {{opacity: 1, transform: 'translateX(0px)'}} exit = {{opacity: 0, transform: 'translateX(-100px)'}}>
            <Logo />
            <div className="home__title">
                <p>Covicare</p>
                <div className="home__title__desc"><p>Covicare is a resource finder for covid essentials all over Assam. We wish you a happy and a fast recovery.</p></div>
            </div>

        </motion.div>
    )
}

export default Home;