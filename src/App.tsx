import './styles/index.scss'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import {ChatContainer} from "./modules/chat/ChatContainer";
import {PrivateRouteWrapper} from "./modules/auth/helpers/PrivateRouteWrapper";
import {LoginContainer} from "./modules/auth/Login/LoginContainer";
import {paths} from "./configs/paths";

export function App() {
    return (
        <Router>
            <Switch>
                <Route path={paths.login.path}>
                    <LoginContainer/>
                </Route>
                <PrivateRouteWrapper>
                    <ChatContainer/>
                </PrivateRouteWrapper>
            </Switch>
        </Router>
    );
}