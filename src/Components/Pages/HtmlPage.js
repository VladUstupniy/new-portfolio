import {useState, useEffect} from 'react';
import '../Css/PagesCss/Page.css';

function HtmlPage(){
    const [isShowPage, setIsShowPage] = useState(false);
    useEffect(() => {
        setTimeout(() => setIsShowPage(true));
    }, []);
    return(
        <div  className={`page Bg ${isShowPage ? 'pageShow' : 'pageUnshow'}`}>
            <h2>Html</h2>
            <p>Имею опыт создания страниц гипертекстовой разметки для отображения их в браузерах.</p>
            <p>Изучил все основы Html, что позволяет без труда составить структуру по стандартам W3C.</p>
            <p>Во время вёрстки сайтов использую методологию BEM и семантические теги.</p>
        </div>
    );
}

export default HtmlPage;
