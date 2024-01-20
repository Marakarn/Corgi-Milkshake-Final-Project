import Navbar from "./Navbar"
import Footer from "./Footer"
const Layout = ({ children }) => {

    return (
        <>
            <Navbar />
            <div className="container mx-auto font-poppins">
            {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout