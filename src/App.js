import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import { store } from './redux/store';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        <ItemContainer cake />
        <ItemContainer />
        <NewCakeContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  )
}

export default App;
