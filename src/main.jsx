import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './pages/home'

import GlobalStyles from './styles/globalStyles';
import Footer from './components/footer';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <Footer />
    <GlobalStyles />
  </StrictMode>,
)
