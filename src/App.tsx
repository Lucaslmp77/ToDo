import './App.css'

import { Header } from './components/Header'
import { Content } from './components/Content'
import { ToDoContextProvider } from './contexts/ToDo'

function App() {

  return (
    <>
      <Header />
      <ToDoContextProvider>
        <Content />
      </ToDoContextProvider>
    </>
  )
}

export default App