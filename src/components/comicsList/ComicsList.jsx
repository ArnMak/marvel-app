import './comicsList.scss';
import ultimate from '../../resources/img/UW.png';
import xman from '../../resources/img/x-men.png';




const ComicsList = () => {
    return (
        <div className="comics__list">
            <ul className="comics__container">
                <li className="comics__item">
                    <a href="#">
                        <img src={ultimate} alt="" className="comics__item-img" />
                        <div className="comics__item-title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comics__item-price">9.99$</div>
                    </a>
                </li>
                <li className="comics__item">
                    <a href="#">
                        <img src={xman} alt="" className="comics__item-img" />
                        <div className="comics__item-title">X-Men: Days of Future Past</div>
                        <div className="comics__item-price">NOT AVAILABLE</div>
                    </a>
                </li>
                <li className="comics__item">
                    <a href="#">
                        <img src={ultimate} alt="" className="comics__item-img" />
                        <div className="comics__item-title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comics__item-price">9.99$</div>
                    </a>
                </li>
                <li className="comics__item">
                    <a href="#">
                        <img src={xman} alt="" className="comics__item-img" />
                        <div className="comics__item-title">X-Men: Days of Future Past</div>
                        <div className="comics__item-price">NOT AVAILABLE</div>
                    </a>
                </li>
                <li className="comics__item">
                    <a href="#">
                        <img src={ultimate} alt="" className="comics__item-img" />
                        <div className="comics__item-title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comics__item-price">9.99$</div>
                    </a>
                </li>
                <li className="comics__item">
                    <a href="#">
                        <img src={xman} alt="" className="comics__item-img" />
                        <div className="comics__item-title">X-Men: Days of Future Past</div>
                        <div className="comics__item-price">NOT AVAILABLE</div>
                    </a>
                </li>
                <li className="comics__item">
                    <a href="#">
                        <img src={ultimate} alt="" className="comics__item-img" />
                        <div className="comics__item-title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comics__item-price">9.99$</div>
                    </a>
                </li>
                <li className="comics__item">
                    <a href="#">
                        <img src={xman} alt="" className="comics__item-img" />
                        <div className="comics__item-title">X-Men: Days of Future Past</div>
                        <div className="comics__item-price">NOT AVAILABLE</div>
                    </a>
                </li>
            </ul>
            <button className='button button__main button__long'>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;