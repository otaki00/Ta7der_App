import { useSelector } from 'react-redux'
import './App.css'

function App() {

  const user = useSelector((state) => state.user.user)

  return (
    <>
      <h1 className='  p-10 text-blue-500 font-mono text-4xl font-extrabold'>
        {`Welcome ${user.name}`}
        </h1>
    </>
  )
}

export default App
