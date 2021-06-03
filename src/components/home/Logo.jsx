import Lottie from 'react-lottie';
import animationData from '../../img/data.json';
import useRenders from '../../useRenders';

const Logo = () => {
    useRenders('Logo');
    return (
        <div className="home__logo">
            <Lottie
                options={{
                    loop: false,
                    autoplay: true,
                    animationData: animationData,
                    rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice'
                    }
                }}
            />
        </div>
    )
}

export default Logo;