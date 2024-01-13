/* eslint-disable react/prop-types */
import styles from "./ProjectCard.module.css";

function ProjectCard({ image, projectName, liveUrl, githubRepo }) {
	return (
		<div className={`${styles["card"]} mb-8`}>
			<img src={`/project-images/${image}`} />
			<div className={styles["card__content"]}>
				<p className={`${styles["card__title"]} mb-5`}>{projectName}</p>
				<a href={liveUrl} target="_blank" rel="noreferrer">
					<button className={`${styles["card__button"]} me-5`}>
						Live Demo
					</button>
				</a>
				<a href={githubRepo} target="_blank" rel="noreferrer">
					<button className={styles["card__button"]}>Source Code</button>
				</a>
			</div>
		</div>
	);
}

export default ProjectCard;
