import styled from "styled-components";
import Home from "./Home";
import ParticlesBackground from "./ParticlesBackground";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";

const Main = styled.main``;

function AppLayout() {
	return (
		<>
			<Main>
				<ParticlesBackground />
				<Home />
				<AboutMe />
				<Experience />
				<Projects />
			</Main>
			<Footer />
		</>
	);
}

export default AppLayout;
