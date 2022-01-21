import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div>
                <NavLink to="/profile" className={ navData => navData.isActive ? `${classes.active} ${classes.item}` : classes.item }>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" className={ navData => navData.isActive ? `${classes.active} ${classes.item}` : classes.item }>Message</NavLink>
            </div>
            <div>
                <NavLink to="/news" className={ navData => navData.isActive ? `${classes.active} ${classes.item}` : classes.item }>News</NavLink>
            </div>
            <div>
                <NavLink to="/music" className={ navData => navData.isActive ? `${classes.active} ${classes.item}` : classes.item }>Music</NavLink>
            </div>
            <div>
                <NavLink to="/settings" className={ navData => navData.isActive ? `${classes.active} ${classes.item}` : classes.item }>Settings</NavLink>
            </div>
        </nav>
    );
}




export default Navbar;