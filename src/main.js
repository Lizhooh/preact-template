import { Provider } from 'preact-redux';
import store from './redux';
import App from './app';

export default () => (
    <Provider store={store}>
        <App />
    </Provider>
);

