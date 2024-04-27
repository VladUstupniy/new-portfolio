import React from 'react';
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

class Main extends React.Component {
    render () {
        return(
            <div className='main'>
                <Sidebar/>
                <Routes>
                    <Route index element={<Homepage/>}/>
                    <Route path='/Homepage' Component={Homepage}/>
                    <Route path='/AboutMePage' Component={AboutMePage}/>
                    <Route path='/EducationPage' Component={EducationPage}/>
                    <Route path='/HtmlPage' Component={HtmlPage}/>
                    <Route path='/CssPage' Component={CssPage}/>
                    <Route path='/JsPage' Component={JsPage}/>
                    <Route path='/CsharpPage' Component={CsharpPage}/>
                    <Route path='/UnityPage' Component={UnityPage}/>
                    <Route path='/PythonPage' Component={PythonPage}/>
                    <Route path='/OtherPage' Component={OtherPage}/>
                </Routes>
            </div>
        );
    }
}

export default Main;
