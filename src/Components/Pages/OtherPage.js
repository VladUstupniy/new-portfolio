import {useState, useEffect} from 'react';
import '../../Css/PagesCss/Page.css';

function OtherPage(){
    const [isShowPage, setIsShowPage] = useState(false);
    useEffect(() => {
        setTimeout(() => setIsShowPage(true));
    }, []);
    return(
        <div  className={`page Bg ${isShowPage ? 'pageShow' : 'pageUnshow'}`}>
            <div className='page__section'>
                <h2>Прочие инструменты:</h2>
                <p>Использую систему контроля версий Git для выгрузки своих проектов на гитхаб-профиль. Знания по системе базовые: коммиты, фиксация изменений, отправка на сервер.</p>
                <p>Создаю собственные ассеты для игр и вношу правки в готовые при необходимости с помощью Aseprite.</p>
                <p>Для вёрстки сайтов использовал графические редакторы - Figma, Photoshop</p>
                <p>Умею обрабатывать векторные изображения в AdobeIllustrator</p>
                <p>Работал с автоматизированным сборщиком проектов - Gulp.</p>
                <p>Использовал W3C validator с целью проверки Html-документов на валдность</p>
                <p>Google Page Speed</p>
            </div>
        </div>
    );
}

export default OtherPage;
