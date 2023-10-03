import { useState, useEffect } from 'react';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMsg from '../errorMsg/ErrorMsg';
import './comicsList.scss';



const ComicsList = () => {

    const [comicsList, setComicsList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(350);
    const [comicsEnd, setComicsEnd] = useState(false);

    const {loading, error, getAllComics} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    }, []);

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComics(offset)
            .then(onComicsListLoaded)
    }

    const onComicsListLoaded = (newComicsList) => {
        let ended = false;
        if (newComicsList.length < 8) {
            ended = true;
        }

        setComicsList(comicsList => [...comicsList, ...newComicsList]);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 8);
        setComicsEnd(comicsEnd => ended)
    }

    const renderItems = (arr) => {
        const items = arr.map((item, i) => {
            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            }

            return (
                <li className="comics__item" key={i}>
                    <a href="#">
                        <img src={item.thumbnail} alt={item.title} style={imgStyle} className="comics__item-img" />
                        <div className="comics__item-title">{item.title}</div>
                        <div className="comics__item-price">{item.price}</div>
                    </a>
                </li>
            )
        });
        return (
            <ul className="comics__container">
                {items}
            </ul>
        )
    }

    const items = renderItems(comicsList);

    const errorMsg = error ? <ErrorMsg/> : null;
    const spinner = loading ? <Spinner/> : null;


    return (
        <div className="comics__list">
            {errorMsg}
            {spinner}
            {items}
            <button 
                disabled={newItemLoading}
                style={{'display': comicsEnd ? 'none' : 'block'}}
                onClick={() => onRequest(offset)}
                className='button button__main button__long'>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;