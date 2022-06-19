import logo from './logo.svg';
import './App.css';
import UserContainer from './components/user/UserContainer';
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>

      <div className="App">
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
