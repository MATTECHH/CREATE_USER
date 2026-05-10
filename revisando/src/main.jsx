import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter} from 'react-router-dom';
import { AppRouter } from './Routes/AppRouter';
import NavBar from './Components/NavBar';
import './app.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <NavBar/>
      <AppRouter/> 
    </HashRouter>
  </StrictMode>,
)
