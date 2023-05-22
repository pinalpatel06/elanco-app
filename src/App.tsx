import { useEffect } from 'react'
import './App.css'
import { useRoutes } from 'react-router'
import routes from './routes'
import { useAppDispatch } from './redux/store'
import { getAllProducts } from './pages/Products/state/reducer'
// import Navbar from './components/navbar';

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getAllProducts({}))
      .unwrap()
      .then((res) => console.log(res))
  })
  let routing = useRoutes(routes)
  return <div className='h-full min-h-[100vh]'>{routing}</div>
}

export default App
