import {useState} from 'react';
import '../Css/HeaderCss/Header.css';
import '../Css/ItemsCss/ModalWindow.css';
import '../Css/ItemsCss/Buttons.css';
import Logo from '../Items/Logo';

function Header () {
    const [showWindow, setShowWindow] = useState(false);
    function ShowWindow() {
        setShowWindow(showWindow => !showWindow);
    }
    return (
        <>
            <header className='header'>
                <nav className='nav'>
                    <button className='button' onClick={ShowWindow}>связаться со мной</button>
                    <Logo/>
                </nav>
            </header>
            <div className={`modalWindow ${showWindow ? 'modalWindow--visible' : 'modalWindow--unvisible'}`}>
                <h2>Можете связаться со мной любым удобным для Вас способом!</h2>
                <div className='modal__list'>
                    <div className='modal__item'>
                        <span>Mobile phone:</span>
                        <a href='+79684251095' target='blank'>+7(968)425-10-95</a>
                    </div>
                    <div className='modal__item'>
                        <span>Email:</span>
                        <a href='vlad.ustupniy@yandex.ru' target='blank'>vlad.ustupniy@yandex.ru</a>
                    </div>
                    <div className='modal__item'>
                        <span>GitHub:</span>
                        <a href='https://github.com/VladUstupniy' target='blank'>github.com/VladUstupniy</a>
                    </div>
                    <div className='modal__item'>
                        <span>Telegram:</span>
                        <a href='t.me:@vladustupniy' target='blank'>@vladustupniy</a>
                    </div>
                    <div className='modal__item'>
                        <span>Whats App:</span>
                        <a href='+79684251095' target='blank'>+7(968)425-10-95</a>
                    </div>
                    <div className='modal__item'>
                        <span>VK:</span>
                        <a href='https://vk.com' target='blank'>+7(968)425-10-95</a>
                    </div>
                </div>
                <button className='button modal__close' onClick={ShowWindow}>X</button>
            </div>
        </>
    );
}

export default Header;
