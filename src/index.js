import ReactDOM from 'react-dom';
import App from './App';
import { AppContextProvider } from './context/AppContext';
import './assets/scss/main.css';

ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  document.getElementById('root')
);