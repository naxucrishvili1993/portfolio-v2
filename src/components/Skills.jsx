import skills from "../config/skills";
import Skill from "./Skill";
import styled from "styled-components";
const CustomSkill = styled.div`
	list-style-type: none;
	max-width: 700px;
	padding: 20px;

	& li {
		margin: 20px 0;
		padding: 10px;
	}
`;

function Skills() {
	return (
		<CustomSkill className="mx-auto text-center">
			<div className="inline-flex mx-auto">
				<h2 className="text-4xl font-semibold tracking-widest text-g uppercase custom-heading">
					Skills
				</h2>
			</div>
			{skills.map((skill, idx) => (
				<Skill skill={skill.skill} value={skill.value} key={idx} />
			))}
		</CustomSkill>
	);
}

export default Skills;
