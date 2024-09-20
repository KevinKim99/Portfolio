import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Kevin } from "./components/Kevin/Kevin";
import { About } from "./components/About/About";
import { Experience} from "./components/Experience/Experience"
function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Kevin />
      <About />
      <Experience />
    </div>
  )
}

export default App;