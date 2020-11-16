import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App";
import { Provider } from "react-redux";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";

import store from "./store";

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <App/>
        </ErrorBoundary>
    </Provider>,
    document.getElementById("root")
);
