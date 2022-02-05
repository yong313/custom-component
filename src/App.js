import './App.css';
import styled from "styled-components";
import Modal from './component/Modal';
import Toggle from './component/Toggle';
import Tab from './component/Tab';
import Tag from './component/Tag';
import ClickToEdit from './component/ClickToEdit';
import AutoComplete from './component/AutoComplete';

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
