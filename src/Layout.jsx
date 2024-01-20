import Navbar from "./components/Navbar"
// import Menubar from "./components/Menubar"
// import Footer from "./Footer"
const Layout = ({ children }) => {

    return (
        <>
            <Navbar />
            <div className="container mx-auto font-poppins">
            {children}
            </div>
            {/* <Menubar /> */}
            {/* <Footer /> */}
        </>
    )
}

export default Layout