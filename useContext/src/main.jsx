import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './components/App.jsx'
import { UserProvider } from './context/UserContext.jsx'
import { ProductProvider } from './context/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <UserProvider>
        <App /> {/* children*/}
      </UserProvider>
    </ProductProvider>
  </StrictMode>,
)
