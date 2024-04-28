import {useState, useEffect} from 'react';
import '../../Css/PagesCss/Homepage.css';

const Homepage = () => {
    const [isShowPage, setIsShowPage] = useState(false);
    useEffect(() => {
        setTimeout(() => setIsShowPage(true));
    }, []);
    return (
        <div className={`homepage Bg ${isShowPage ? 'pageShow' : 'pageUnshow'}`}>
            <h1 className="homepage__title">
                Добро пожаловать на мой сайт-портфолио
            </h1>
            <p className="homepage__text">
                Здесь Вы можете ознакомиться с моими навыками и умениями, <br/>
                посмотреть тестовые работы и узнать чем я могу быть полезен
            </p>
            <p className="homepage__text">
                <span>Чтобы начать знакомство - воспользуйтесь панелью навигации</span>
                <span className="homepage__arrow"></span>
            </p>
        </div>
    );
}
export default Homepage;
