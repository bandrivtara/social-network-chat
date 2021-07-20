import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {TBIntlProvider} from "./intl/TBIntlProvider";
import { Provider } from 'react-redux'

ReactDOM.render(
    <React.StrictMode>

        <TBIntlProvider>
            <App/>
        </TBIntlProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
