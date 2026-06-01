import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ClubInfo from '../components/ClubInfo';
import Services from '../components/Services';
import News from '../components/News';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <ClubInfo />
        <Services />
        <News />
      </main>
      <Footer />
    </div>
  );
}