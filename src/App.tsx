import { useEffect, useState } from "react";
import BookingFeatures from "./components/BookingFeatures.tsx";
import Demo from "./components/Demo";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PagesReview from "./components/PagesReview.tsx";
import Premium from "./components/Premium";
import Purchase from "./components/Purchase.tsx";
import Reviews from "./components/Reviews.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Loader from "./components/Loader.tsx";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  if(loading) return <Loader/>
  return (
    <main className="min-h-screen relative">
      <Header />
      <Hero />
      <Features />
      <Demo />
      <Premium />
      <Reviews />
      <BookingFeatures />
      <PagesReview />
      <Purchase />
      <aside className="fixed bottom-[40px] right-[40px] z-50">
        <ScrollToTop />
      </aside>
    </main>
  );
}

export default App;
