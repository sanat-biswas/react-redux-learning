import UserContainer from './components/user/UserContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'

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
