import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from "./components/Todo";
import ShowHidePassword from './components/ShowHidePassword';
import ListOfContacts from './components/ListOfContacts';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Todo />
      <ShowHidePassword />
      <ListOfContacts />
    </>
  )
}

export default App
