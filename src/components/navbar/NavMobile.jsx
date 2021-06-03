import { home, account, graph, services, menu } from '../../img/icons.js';
import useRenders from '../../useRenders';

const NavMobile = () => {
    useRenders('NavMobile');
    return (
        <div className="navMobile">
            <li className="navMobile__navItems">
                {home}
            </li>
            <li className="navMobile__navItems">
                {account}
            </li>
            <li className="navMobile__navItems">
                {services}
            </li>
            <li className="navMobile__navItems">
                {graph}
            </li>
            <li className="navMobile__navItems">
                {menu}
            </li>
        </div>
    )
}

export default NavMobile;