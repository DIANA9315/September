import { BrowserRouter } from 'react-router-dom'
import BlogRoutes from './routes/BlogRoutes'
import Header from './components/Header/Header'
import './App.css'

function App () {
  return (
    <BrowserRouter>
      <Header />
      <div className='app'>
        <main className='app-main'>
          <div className='container'>
            <BlogRoutes />
          </div>
        </main>

        <footer className='app-footer'>
          <div className='container'>
            <p>© 2024 Mi Blog. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App