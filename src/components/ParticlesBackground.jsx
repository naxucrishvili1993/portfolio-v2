import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import particlesConfig from "../config/particles.config";

function ParticlesBackground() {
	const particlesInit = async (main) => {
		await loadFull(main);
	};

	const particlesLoaded = useCallback(async (container) => {
		await console.log(container);
	}, []);

	return (
		<div id="particle">
			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={particlesConfig}></Particles>
		</div>
	);
}

export default ParticlesBackground;
