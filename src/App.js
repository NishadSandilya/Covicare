import Home from './components/home/Home';
import NavMobile from './components/navbar/NavMobile';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import './styles/app.css';
import Cases from './components/cases/Cases';

const App = () => {
    return (
        <div className="App">
            <AnimatePresence>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path='/cases' component={Cases} />
                    <Route path="*" children={<Redirect to="/" />} />
                </Switch>
            </AnimatePresence>
            <NavMobile />
        </div>
    )
}

export default App;