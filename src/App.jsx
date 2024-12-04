import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Body from './components/Body';

function App() {
  return (
    <Body>
      <Navbar />
      <section id="home" className="p-8 bg-blue-500 text-white">
        <h1 className="text-4xl">Welcome to My Portfolio</h1>
        <p className="mt-2">Here you can learn more about me and my work.</p>
      </section>
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </Body>
  );
}

export default App;
