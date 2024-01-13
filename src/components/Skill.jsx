/* eslint-disable react/prop-types */
import styled from "styled-components";

const Bar = styled.span`
	background: #353b48;
	display: block;
	height: 20px;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

	&:hover {
		box-shadow: 0 1px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	}

	& span {
		height: 20px;
		float: left;
	}
`;

const Progress = styled.span`
	background: #00a1a7;
	transition: width 1s ease-in-out;
	width: 0%;
`;

function Skill({ skill, value }) {
	return (
		<li>
			<h3 className="mb-3 font-medium tracking-wider">{skill}</h3>
			<Bar>
				<Progress
					className={`${skill}`}
					style={{
						width: `${value}%`,
					}}></Progress>
			</Bar>
		</li>
	);
}

export default Skill;
