import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './Components/Counter'
import { Provider } from 'react-redux'
import { Store } from './Components/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={Store}>
    <Counter/>

    </Provider>
    </>
  )
}

export default App
