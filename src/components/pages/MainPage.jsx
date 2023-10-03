import { useState } from "react";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import vision from '../../resources/img/vision.png';



const MainPage = () => {

    const [selectedChar, setChar] = useState(null);

    const onCharSelect = (id) => {
      setChar(id);
    }

    return (
        <>
            <RandomChar/>
            <div className="char__content">
                <CharList onCharSelect={onCharSelect}/>
                <ErrorBoundary>
                  <CharInfo charId={selectedChar}/>
                </ErrorBoundary>         
            </div>
            <img src={vision} alt="vision" className="bg__decoration" />
        </>
    )
}

export default MainPage;