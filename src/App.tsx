    // src/main.tsx
    import React from 'react'
    import ReactDOM from 'react-dom/client'
    import App from './App.tsx'
    import './index.css'
    import { BrowserRouter } from 'react-router-dom' // 追加

    ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <BrowserRouter> {/* 追加 */}
          <App />
        </BrowserRouter> {/* 追加 */}
      </React.StrictMode>,
    )