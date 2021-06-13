import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import MainPage from './component/mainPage';
import CreateEmployee from './component/addNewEmployee'
import store from './store'
import Login from './component2/component/Login'
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Provider store={store}>
        <Login></Login>
        <CreateEmployee></CreateEmployee>
        <MainPage/>
    </Provider>
      {/* </header> */}
    </div>
  );
}

export default App;
