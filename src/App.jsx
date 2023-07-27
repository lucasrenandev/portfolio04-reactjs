import { GlobalStyles } from "./GlobalStyles"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Services from "./components/services/Services"
import Cta from "./components/cta/Cta"
import Resume from "./components/resume/Resume"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

export default function App() {
  return (
    <>
      <GlobalStyles/>
      <Header/>
      <Home/>
      <About/>
      <Services/>
      <Cta/>
      <Resume/>
      <Contact/>
      <Footer/>
    </>
  )
}