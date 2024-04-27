import { NavLink } from 'react-router-dom';
import '../../Css/ItemsCss/Logo.css';
const Logo = () => {
    return(
        <NavLink to='/Homepage' className='logo'>VU</NavLink>
    );
}
export default Logo;
