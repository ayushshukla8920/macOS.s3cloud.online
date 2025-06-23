import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { KernelProvider } from "./context/kernelContext.jsx";
import { AppProvider } from './context/AppContext.jsx';

createRoot(document.getElementById('root')).render(
  <KernelProvider>
    <AppProvider>
      <App />
    </AppProvider>
  </KernelProvider>
)
