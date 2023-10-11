import Register from "../components/Register";
import Introduce from "../components/Introduce";
import Discover from "../components/Discover";
import Advantages from "../components/Advantages";
import Projects from "../components/Projects";
import SoundPack from "../components/SoundPack";

function Main() {
  return (
    <main>
      <Introduce />
      <Discover/>
      <SoundPack/>
      <Advantages/>
      <Register/>
      <Projects/>
    </main>
  );
}

export default Main;
