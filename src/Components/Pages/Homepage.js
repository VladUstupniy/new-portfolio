import React from "react";
import '../../Css/PagesCss/Homepage.css';

class Homepage extends React.Component {
    render(){
        return (
            <div  className='homepage Bg'>
                <h1 className="homepage__title">
                    Добро пожаловать на мой сайт-портфолио.
                </h1>
                <p className="homepage__text">
                    Здесь Вы можете ознакомиться с моими навыками и умениями, <br/>
                    посмотреть некоторые тестовые работы и узнать на что я способен!
                </p>
                <p className="homepage__text">
                    <span>Чтобы начать знакомство - воспользуйтесь панелью навигации слева!</span>
                    <span className="homepage__arrow"></span>
                </p>
            </div>
        );
    }
}
export default Homepage;
