import { useState } from 'react'
import MultiStepForm from './style/View/Components/MultiStepForm/MultiStepForm'
import Layout from './style/View/Layout'
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
      {/* <Layout /> */}
      <MultiStepForm />
      </main>
    </>
  )
}

export default App
