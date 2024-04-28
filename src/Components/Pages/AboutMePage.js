import {useState, useEffect} from 'react';
import '../../Css/PagesCss/Page.css';

const AboutMePage = () => {
    const [isShowPage, setIsShowPage] = useState(false);
    useEffect(() => {
        setTimeout(() => setIsShowPage(true));
    }, []);
    return(
        <div className={`page Bg ${isShowPage ? 'pageShow' : 'pageUnshow'}`}>
            <div className='page__section'>
                <h2>Обо мне:</h2>
                <p>Меня зовут Уступный Владислав Владимирович, я начинающий специалист в сфере IT-разработки</p>
                <ul>
                    <li>Личные качества:</li>
                    <li>Ориентированность на пользователя</li>
                    <li>Корректное общение</li>
                    <li>Знание технического английского языка</li>
                    <li>Легко обучаюсь</li>
                    <li>Слежу за последними тенденциями в сфере информационных технологий</li>
                </ul>
            </div>
            <div className='page__section'>
                <h2>Желаемая должность:</h2>
                <p>GameDev C#/Unity</p>
            </div>
            <div className='page__section'>
                <h2>Цели:</h2>
                <p>Поиск работы в должности C#/Unity-разработчика</p>
                <p>Закрепление имеющихся навыков на практических задачах</p>
                <p>Получение новых навыков, знаний и опыта</p>
                <p>Работа на интересных, масштабных проектах</p>
            </div>
        </div>
    );
}

export default AboutMePage;
