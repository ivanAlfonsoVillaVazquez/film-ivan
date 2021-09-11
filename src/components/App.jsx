import '../styles/index.css';
import Navbar from './Navbar';
import '../../node_modules/carbon-components/css/carbon-components.css';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import Body from './Body';
import Footer from './Footer';
import Film from './Film';
import {  BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
    return (
        <div id="App">
            <Navbar/>
            <Router>
                <Route exact path="/" component={ Body } />
                <Route exact path="/film" component={ Film }/>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;
