import {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import '../../Css/SidebarCss/Sidebar.css';
import CsharpImg from '../../Img/icons/Csharp-icon.png';
import UnityImg from '../../Img/icons/unity-icon.png';
import JsImg from '../../Img/icons/js-icon.png';
import HtmlImg from '../../Img/icons/html-icon.png';
import CssImg from '../../Img/icons/css-icon.png';
import PythonImg from '../../Img/icons/python-icon.png';

function Sidebar() {
    const [btnState, setBtnState] = useState(false);
    function handleClick(){
        setBtnState(btnState => !btnState);
    }
    useEffect(() => {
        setTimeout(() => setBtnState(true));
    }, []);
    return(
        <>
            <button className='menuButton' onClick={handleClick}>меню</button>
            <aside className={btnState ? 'sidebar' : 'sidebar sidebarVisible'}>
                <ul className='sidebar__list'>
                    <NavLink to='/AboutMePage' 
                        className={({ isActive }) => isActive ? "sidebar__link--active" : "sidebar__link--not-active"}
                        onClick={handleClick}>
                        <li>
                            <span>About me</span>
                        </li>
                    </NavLink>

                    <NavLink to='/EducationPage' 
                        className={({ isActive }) => isActive ? "sidebar__link--active" : "sidebar__link--not-active"}
                        onClick={handleClick}>
                        <li>
                            <span>Education</span>
                        </li>
                    </NavLink>

                    <NavLink to='CsharpPage' 
                        className={({ isActive }) => isActive ? "sidebar__link--active" : "sidebar__link--not-active"}
                        onClick={handleClick}>
                        <li>
                            <img src={CsharpImg} alt='C# icon'/>
                            <span>C#</span>
                        </li>
                    </NavLink>

                    <NavLink to='UnityPage' 
                        className={({ isActive }) => isActive ? "sidebar__link--active" : "sidebar__link--not-active"}
                        onClick={handleClick}>
                        <li>
                            <img src={UnityImg} alt='Unity icon'/>
                            <span>Unity</span>
                        </li>
                    </NavLink>

                    <NavLink to='JsPage' 
                        className={({ isActive }) => isActive ? "sidebar__link--active" : "sidebar__link--not-active"}
                        onClick={handleClick}>
                        <li>
                            <img src={JsImg} alt='Js icon'/>
                            <span>Js</span>
                        </li>
                    </NavLink>

                    <NavLink to='/HtmlPage' 
                        className={({ isActive }) => isActive ? "sidebar__link--active" : "sidebar__link--not-active"}
                        onClick={handleClick}>
                        <li>
                            <img src={HtmlImg} alt='Html icon'/>
                            <span>Html</span>
                        </li>
                    </NavLink>

                    <NavLink to='/CssPage' 
                        className={({ isActive }) => isActive ? "sidebar__link--active" : "sidebar__link--not-active"}
                        onClick={handleClick}>
                        <li>
                            <img src={CssImg} alt='Css icon'/>
                            <span>Css</span>
                        </li>
                    </NavLink>

                    <NavLink to='PythonPage' 
                        className={({ isActive }) => isActive ? "sidebar__link--active" : "sidebar__link--not-active"}
                        onClick={handleClick}>
                        <li>
                            <img src={PythonImg} alt='Python icon'/>
                            <span>Python</span>
                        </li>
                    </NavLink>

                    <NavLink to='OtherPage' 
                        className={({ isActive }) => isActive ? "sidebar__link--active" : "sidebar__link--not-active"}
                        onClick={handleClick}>
                        <li>
                            <span>Other tools</span>
                        </li>
                    </NavLink>
                </ul>
            </aside>
        </>
    );

}

export default Sidebar;
