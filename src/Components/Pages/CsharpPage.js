import {useState, useEffect} from 'react';
import '../../Css/PagesCss/Page.css';

const CsharpPage = () => {
    const [isShowPage, setIsShowPage] = useState(false);
    useEffect(() => {
        setTimeout(() => setIsShowPage(true));
    }, []);
    return(
        <div className={`page Bg ${isShowPage ? 'pageShow' : 'pageUnshow'}`}>
            <div className='page__section'>
                <h2>C#</h2>
                <p>По программе обучения на разработчика игр и мультимедийных приложений начал изучать данный язык объектно ориентированного программирования.</p>
                <p>Владею языком на базовом уровне, постепенно развиваясь и изучая новые технологии.</p>
            </div>
            <div className='page__section'>
                <ul>
                    <li>Имею чёткое понимание что такое ООП и знаю основные концепции:</li>
                    <li>Полиморфизм</li>
                    <li>Абстракция</li>
                    <li>Инкапсуляция</li>
                    <li>Наследование</li>
                </ul>
            </div>
            <div className='page__section'>
                <ul>
                    <li>Знаком с принципами SOLID:</li>
                    <li><span>S</span>ingle responsibility</li>
                    <li><span>O</span>pen-closed</li>
                    <li><span>L</span>iskov substitution</li>
                    <li><span>I</span>nterface segregation</li>
                    <li><span>D</span>ependency inversion</li>
                </ul>
            </div>
            <div className='page__section'>
                <p>Изучаю паттерны программирования, и очень хотел бы детальнее разобраться с ними на практических задачах.</p>
            </div>
        </div>
    );
}

export default CsharpPage;
