import { home, account, graph, services, menu } from '../../img/icons.js';
import { NavLink } from 'react-router-dom';
import useRenders from '../../useRenders';

const NavMobile = () => {
    useRenders('NavMobile');
    return (
        <div className="navMobile">
            <NavLink exact to = '/' className="navMobile__navItems">
                {home}
            </NavLink>
            <NavLink exact to = '/account' className="navMobile__navItems">
                {account}
            </NavLink>
            <NavLink exact to = '/services' className="navMobile__navItems">
                {services}
            </NavLink>
            <NavLink exact to = '/cases' className="navMobile__navItems">
                {graph}
            </NavLink>
            <NavLink exact to = '/menu' className="navMobile__navItems">
                {menu}
            </NavLink>
        </div>
    )
}

export default NavMobile;