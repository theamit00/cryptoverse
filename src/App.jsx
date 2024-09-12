import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import { CryptoCurrencies, CryptoDetails, Exchanges, Homepage, News } from './pages';

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
    children : [
      {
        path: "/",
        element : <Homepage/>
      },
      {
        path: '/cryptocurrencies',
        element : <CryptoCurrencies/>,
      },
      {
        path: '/crypto/:coinId',
        element : <CryptoDetails/>
      },
      {
        path: '/exchanges',
        element : <Exchanges/>
      },
      {
        path : '/news',
        element : <News/>
      }
    ]
  }
])

function App() { 

  return (
    <RouterProvider router={router} />
  )
}

export default App
