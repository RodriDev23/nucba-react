import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import Navbar from "./NavBar";
import Products from "./Product";
import SellYourSneaker from "./SellYourSneaker";
import Footer from "./Footer";
import { MenuProvider } from "./MenuContext";
import AboutPage from "./About"; // Import your About component
import ContactPage from "./Contact"; // Import your Contact component
import ProductShow from "./Other-Components/ProductShow";
import ProductsToBuy from "./ProductsToBuy";
import ProductFinishToBuy from "./Other-Components/ProductFinishToBuy";
import ScreenCompletedPurchase from "./Other-Components/ScreenPurchase";

function App() {
  return (
    <Router>
      <div className="min-h-screen min-w-screen flex flex-col justify-start items-center">
        <MenuProvider>
          <Navbar />
          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/products" element={<ProductShow />} />
            <Route path="/productsFinishToBuy" element={<ProductFinishToBuy />} />
            <Route path="/purchaseComplete" element={<ScreenCompletedPurchase />} />
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Products />
                  <SellYourSneaker />
                  <Footer />
                </>
              }
            />
          </Routes>
          </MenuProvider>
       </div>
       </Router>
          )
          }
export default App