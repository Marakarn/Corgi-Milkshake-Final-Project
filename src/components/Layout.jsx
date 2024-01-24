import Navbar from "./Navbar"
import Footer from "./Footer"
import Menubar from "./Menubar"

const Layout = ({ children }) => {

    return (
        <>
            <Navbar />
            <div className="container mx-auto font-poppins">
            {children}
            </div>
            <Menubar />
            <Footer />
        </>
    )
}

export default Layout