import { NavLink } from 'react-router-dom';
import classes from './Dialog.module.css';

const Dialog = (props) => {
    let link = './' + props.id;
    return (
        <NavLink to={link} className={ classes.dialog }>
            { props.name }
        </NavLink>
    );
}

export default Dialog;