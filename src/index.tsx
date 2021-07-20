import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {TBIntlProvider} from "./intl/TBIntlProvider";

ReactDOM.render(
    <React.StrictMode>

        <TBIntlProvider>
            <App/>
        </TBIntlProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
