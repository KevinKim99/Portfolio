import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Kevin } from "./components/Kevin/Kevin";
import { About } from "./components/About/About";

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Kevin />
      <About />
    </div>
  )
}

export default App;