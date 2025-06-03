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
    // Opsional: Hapus elemen dari DOM sepenuhnya setelah transisi selesai
    initialLoadingScreen.addEventListener(
      "transitionend",
      () => {
        initialLoadingScreen.remove();
      },
      { once: true }
    ); // Hanya jalankan sekali
  }, 1000); // Penundaan 100ms
}