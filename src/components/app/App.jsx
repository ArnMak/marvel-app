import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";



import vision from '../../resources/img/vision.png';


class App extends Component {
  state = {
    selectedChar: null
  }

  onCharSelect = (id) => {
    this.setState({selectedChar: id})
  }

  render() {
    return (
      <div className="app">
        <AppHeader/>
        <main>
          <RandomChar/>
          <div className="char__content">
            <CharList onCharSelect={this.onCharSelect}/>
            <ErrorBoundary>
              <CharInfo charId={this.state.selectedChar}/>
            </ErrorBoundary>
            
          </div>
          <img src={vision} alt="vision" className="bg__decoration" />
        </main>
      </div>
    );
  }
}

export default App;
