import Introduce from "../components/container/Introduce";
import Discover from "../components/container/Discover";
import Projects from "../components/container/Projects";
import SoundPack from "../components/container/SoundPack";
import Withdraw from "../components/container/Withdraw";
import Community from "../components/container/Community";
import Register from "./Register";

function Main() {
  return (
    <main>
      <Introduce />
      <Discover/>
      <SoundPack/>
      <Community/>
      <Withdraw/>
      <Register/>
      <Projects/>
    </main>
  );
}

export default Main;
