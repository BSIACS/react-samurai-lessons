import classes from "./Preloader.module.css";
import preloader from '../../../img/preloader.gif';

const Preloader = () => {
    return <div className={classes.preloader}>
        <div className={classes.rectangle}>
            <img src={preloader} alt=""/>
        </div>
    </div>
}

export default Preloader;