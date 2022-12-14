import React from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main';

class App extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <div className="cards">   
                <Main />
                </div>
                <Footer />
            </div>
        )
    }
}

export default App;