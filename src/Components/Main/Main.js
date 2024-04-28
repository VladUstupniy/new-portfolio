import {Routes, Route} from 'react-router-dom';
import '../../Css/MainCss/Main.css';
import Sidebar from '../Sidebar/Sidebar';
import Homepage from '../Pages/Homepage';
import AboutMePage from '../Pages/AboutMePage';
import EducationPage from '../Pages/EducationPage';
import HtmlPage from '../Pages/HtmlPage';
import CssPage from '../Pages/CssPage';
import JsPage from '../Pages/JsPage';
import CsharpPage from '../Pages/CsharpPage';
import UnityPage from '../Pages/UnityPage';
import PythonPage from '../Pages/PythonPage';
import OtherPage from '../Pages/OtherPage';

const Main = () => {
    return(
        <div className='main'>
            <Sidebar/>
            <Routes>
                <Route index element={<Homepage/>}/>
                <Route path='/Homepage' element={<Homepage/>}/>
                <Route path='/AboutMePage' element={<AboutMePage/>}/>
                <Route path='/EducationPage' element={<EducationPage/>}/>
                <Route path='/HtmlPage' element={<HtmlPage/>}/>
                <Route path='/CssPage' element={<CssPage/>}/>
                <Route path='/JsPage' element={<JsPage/>}/>
                <Route path='/CsharpPage' element={<CsharpPage/>}/>
                <Route path='/UnityPage' element={<UnityPage/>}/>
                <Route path='/PythonPage' element={<PythonPage/>}/>
                <Route path='/OtherPage' element={<OtherPage/>}/>
            </Routes>
        </div>
    );
}

export default Main;
