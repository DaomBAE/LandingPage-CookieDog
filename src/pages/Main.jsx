import Register from "../components/Register";
import Introduce from "../components/Introduce";
import Discover from "../components/Discover";
import Advantages from "../components/Advantages";
import Projects from "../components/Projects";
import SoundPack from "../components/SoundPack";
import Withdraw from "../components/Withdraw";

function Main() {
  return (
    <main>
      <Introduce />
      <Discover/>
      <SoundPack/>
      <Advantages/>
      <Withdraw/>
      <Register/>
      <Projects/>
    </main>
  );
}

export default Main;
