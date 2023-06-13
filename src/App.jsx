import { BrowserRouter as Router } from "react-router-dom"
import { Header, ScrollToTop } from "./components"
import AppRoutes from "./routes/AppRoutes"

function App() {

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col overflow-x-hidden min-h-screen relative z-0">
        <Header />
        <div className="flex-grow">
          <AppRoutes />
        </div>
      </div>
    </Router>
  )
}

export default App
