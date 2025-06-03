import Navbar from "../Components/Navbar"
import WebHeader from "../Components/WebHeader"
import WebAfterHeader from "../Components/WebAfterHeader"
import WebProcess from "../Components/WebProcess"
import WebServices from "../Components/WebServices"
import Footer from "../Components/footer"
import Whatsapp from "../Components/Whatsapp"
import WebSocialContainer from "../Components/WebSocialContainer"
import Cursor from "../Components/Cursor"


function Web() {
  
    return (
    <>
    <Cursor/>
    <Navbar/>
    <WebHeader/>
    <WebAfterHeader/>
    <WebProcess/>
    <WebServices/>
    <Footer/>
    <Whatsapp/>
    <WebSocialContainer/>
    </>
  )
}


export default Web
