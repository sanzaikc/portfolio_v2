import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

import particleConfig from "./particleConfig.js";

function ParticleBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  //   const particlesLoaded = (container) => {
  //     console.log(container);
  //   };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      //   loaded={particlesLoaded}
      options={particleConfig}
    ></Particles>
  );
}

export default ParticleBackground;
