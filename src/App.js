
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Heading from './components/Heading';
import SideInfo from './components/SideInfo';

function App() {
  return (
    <>
    <Heading title ="The Game Of Mind"/>
    <main className="App">
      <div className="app-container">
      <Content />
      <SideInfo />
      </div>
    </main>
    <Footer />
    </>
  );
}

export default App;
