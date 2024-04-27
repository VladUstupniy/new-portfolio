import {useState, useEffect} from 'react';
import '../../Css/PagesCss/Page.css';

function UnityPage(){
    const [isShowPage, setIsShowPage] = useState(false);
    useEffect(() => {
        setTimeout(() => setIsShowPage(true));
    }, []);
    return(
        <div  className={`page Bg ${isShowPage ? 'pageShow' : 'pageUnshow'}`}>
            <div className='page__section'>
                <h2>Unity</h2>
                <p>Изучаю игровой движок Unity, создавая различные мини-игры. Уверенно могу организовать движение персонажа тремя способами, столкновение с другими объектами, или взаимодействие с триггером.</p>
                <p>Изучил новую систему ввода через InputActions, могу нарисовать карту с помощью Tilemap, сейчас разбираю navmesh. Работаю с анимациями и логической составляющей персонажей и объектов. Больше всего нравится рабоать с 2D-играми.</p>
                <p>На данном этапе разрабатываю собственную TopDown игру.</p>
            </div>
            <div className='page__section'>
                <p>В планах на будущее развиваться, практиковать изученные технологии, и найти работу в сфере game-разработки.</p>
            </div>
        </div>
    );
}

export default UnityPage;
