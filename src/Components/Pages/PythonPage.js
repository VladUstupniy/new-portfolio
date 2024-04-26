import {useState, useEffect} from 'react';
import '../../Css/PagesCss/Page.css';

function PythonPage(){
    const [isShowPage, setIsShowPage] = useState(false);
    useEffect(() => {
        setTimeout(() => setIsShowPage(true));
    }, []);
    return(
        <div  className={`page Bg ${isShowPage ? 'pageShow' : 'pageUnshow'}`}>
            <div className='page__section'>
                <h2>Python</h2>
                <p>По ходу курса изучил базовые концепции языка программирования.</p>
                <p>Повторил ранее изученные концепции ООП.</p>
                <p>На практике решал математические задачи с помощью алгоритмов, написанных на Python, разрабатывал мини-игру, писал игрового бота, а так же писал сайт с Frontend и Backend составляющей, изучив фреймворк Jango.</p>
            </div>
        </div>
    );
}

export default PythonPage;
