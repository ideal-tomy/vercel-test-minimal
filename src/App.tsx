    // src/App.tsx
    import React from 'react'
    import { Routes, Route, Link } from 'react-router-dom' // react-router-dom からインポート
    import reactLogo from './assets/react.svg'
    import viteLogo from '/vite.svg'
    import './App.css'

    // 簡単なホームページコンポーネント
    function HomePage() {
      const [count, setCount] = React.useState(0)
      return (
        <>
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React (Home Page)</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </>
      )
    }

    // 簡単なアバウトページコンポーネント
    function AboutPage() {
      return (
        <div>
          <h1>About Page</h1>
          <p>This is a simple about page for testing routing.</p>
        </div>
      )
    }


    function App() {
      return (
        <div>
          <nav>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
          </nav>
          <hr />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      )
    }

    export default App;