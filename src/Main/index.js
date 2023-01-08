import React from 'react';
import * as C from './styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from '../components/templates/Header';
import Nav from '../components/templates/Nav';
import Footer from '../components/templates/Footer';
import { HashRouter } from 'react-router-dom';
import Routes from './routes';


const App = () =>
{
    return (

        <HashRouter>
            <C.Container >
                <div className='header'>
                    <Header />
                </div>
                <div className='menu'>
                    <Nav />
                </div>
                <div className='content'>
                    <Routes />
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </C.Container>
        </HashRouter>

    )
}

export default App;