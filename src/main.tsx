import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

const initialLoadingScreen = document.getElementById("initial-loading-screen");
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

if (initialLoadingScreen) {
  setTimeout(() => {
    initialLoadingScreen.classList.add("fade-out");
    initialLoadingScreen.addEventListener(
      "transitionend",
      () => {
        initialLoadingScreen.remove();
      },
      { once: true }
    ); // Hanya jalankan sekali
  }, 2000); 
}