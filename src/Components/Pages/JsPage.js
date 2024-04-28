import {useState, useEffect} from 'react';
import '../../Css/PagesCss/Page.css';

const JsPage = () => {
    const [isShowPage, setIsShowPage] = useState(false);
    useEffect(() => {
        setTimeout(() => setIsShowPage(true));
    }, []);
    return(
        <div  className={`page Bg ${isShowPage ? 'pageShow' : 'pageUnshow'}`}>
            <div className='page__section'>
                <h2>JavaScript</h2>
                <p>Имею опыт программирования на языке JavaScript.</p>
                <p>Изучал его самостоятельно во время изучения вёрстки web-сайтов.</p>
                <p>Умею взаимодействовать с DOM-элементами, и менять их значения. Отслеживать действия пользователя, осуществлять функционал при взаимодействии с элементами web-страницы.</p>
                <p>Имею опыт внедрения модальных окон, табов, выпадающих списков.</p>
                <p>Так же работал с JS-фреймворком React, когда писал это WebApp-портфолио.</p>
            </div>
        </div>
    );
}

export default JsPage;
