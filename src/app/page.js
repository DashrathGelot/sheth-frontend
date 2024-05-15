import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Landing />
      <Footer />
    </main>
  );
}
