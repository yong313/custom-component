import './App.css';
import Modal from './component/Modal';
import Toggle from './component/Toggle';
import Tab from './component/Tab';
import Tag from './component/Tag';
import ClickToEdit from './component/ClickToEdit/ClickToEdit';
import AutoComplete from './component/AutoComplete/AutoComplete';

function App() {
  return (
    <div className="App">
      <Modal />
      <Toggle />
      <Tab />
      <Tag />
      <ClickToEdit />
      <AutoComplete />
    </div>
  );
}

export default App;
