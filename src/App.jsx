import BrowserRouter from "./components/BrowserRouter.jsx"
import Route from "./components/Route.jsx"
import Blog from "./components/Blog.jsx"
import NavBar from "./components/NavBar.jsx"
import Contact from "./components/Contact.jsx"
import './styles/App.css'

function App() {
    return (
        <>
        <BrowserRouter>
        <div className="whole-page">
            <div className="nav">
                <NavBar />
            </div>
            <div className="main-body">
                <Route path="/home">
                    <h1>Home page placeholder</h1>
                </Route>
                <Route path="/blog">
                    <Blog />
                </Route>
                <Route path="/about">
                    <h1>About page placeholder</h1>
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </div>
        </div>
        </BrowserRouter>
        </>
    )
}

export default App

