import {Route, Switch} from 'react-router-dom';
import './App.scss';
import Converter from '../converter/converter';
import Header from '../header/header';
import HeadWrapper from '../head/head';
import ConvertHistory from '../convert-history/convert-history';
import Footer from '../footer/footer';

function App() {
    return (
        <>
            <Header/>
            <HeadWrapper/>
        <Switch>
            <Route exact path={'/'}>
                <Converter/>
                <ConvertHistory/>
                <Footer/>
            </Route>
        </Switch>
        </>
    );
}

export default App;
