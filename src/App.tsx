import BookingFeatures from "./components/BookingFeatures.tsx";
import Demo from "./components/Demo";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PagesReview from "./components/PagesReview.tsx";
import Premium from "./components/Premium";
import Purchase from "./components/Purchase.tsx";
import Reviews from "./components/Reviews.tsx";
function App() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Demo />
      <Premium />
      <Reviews />
      <BookingFeatures />
      <PagesReview />
      <Purchase />
    </main>
  );
}

export default App;
