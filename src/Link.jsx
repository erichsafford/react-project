import { BrowserContext } from "./components/BrowserRouter.jsx"
import { useContext } from "react"

function Link({children, to}) {
    const {setCurrentURL} = useContext(BrowserContext)

    function handleNav() {
        window.history.pushState({}, "", to)
        setCurrentURL(new URL(window.location.origin + to))
    }

    return <a onClick={handleNav}>{children}</a>
}

export default Link