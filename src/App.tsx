import BookingFeatures from "./components/BookingFeatures.tsx";
import Demo from "./components/Demo";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Premium from "./components/Premium";
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
    </main>
  );
}

export default App;
