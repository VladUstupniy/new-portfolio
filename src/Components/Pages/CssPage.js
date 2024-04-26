import {useState, useEffect} from 'react';
import '../Css/PagesCss/Page.css';

function CssPage(){
    const [isShowPage, setIsShowPage] = useState(false);
    useEffect(() => {
        setTimeout(() => setIsShowPage(true));
    }, []);
    return(
        <div className={`page Bg ${isShowPage ? 'pageShow' : 'pageUnshow'}`}>
            <div className='page__section'>
                <h2>Css:</h2>
                <p>Имею опыт стилизации сайтов с помощью Каскадных Таблиц Стилей.</p>
                <p>Освоил методы позиционирования элементов, такие как: Flex, Grid, Float.</p>
                <p>Умею реализовывать анимацию через keyframes.</p>
                <p>Во время вёрстки использую методологию BEM.</p>
                <p>Освоил препроцессоры Scss и Less.</p>
            </div>
        </div>
    );
}

export default CssPage;
