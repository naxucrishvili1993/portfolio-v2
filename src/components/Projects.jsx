import projects from "../config/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
	return (
		<section id="projects" className="mx-5 px-5 mb-20">
			<div className="flex">
				<h2 className="text-3xl text-center font-semibold tracking-widest text-g uppercase mx-auto mt-[5rem] md:text-4xl mb-[40px] custom-heading">
					Projects
				</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-5 pb-5">
				{projects.map((project, idx) => (
					<ProjectCard
						key={idx}
						image={project.image}
						projectName={project.projectName}
						liveUrl={project.liveUrl}
						githubRepo={project.githubRepo}
					/>
				))}
			</div>
		</section>
	);
}

export default Projects;
