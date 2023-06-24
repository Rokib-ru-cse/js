import Footer from "./Footer";
import Nevbar from "./Nevbar";


const Layout = ({children}) => {
    return ( <div className="content">
        <Nevbar/>
        {children}
        <Footer/>
    </div> );
}
 
export default Layout;