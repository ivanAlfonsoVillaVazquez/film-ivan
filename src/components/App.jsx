import '../styles/index.css';
import Navbar from './Navbar';
import '../../node_modules/carbon-components/css/carbon-components.css';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import Body from './Body';

function App() {
    return (
        <div id="App">
            <Navbar/>
            <Body/>
        </div>
    );
}

export default App;
