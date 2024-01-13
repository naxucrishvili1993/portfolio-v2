import { useState } from "react";
import { FaAlignRight, FaArrowDown, FaMoon, FaSun } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";
import Socials from "./Socials";

const sections = [
	{ value: "Home", link: "home" },
	{ value: "About me", link: "about-me" },
	{ value: "Portfolio", link: "portfolio" },
	{ value: "Contact", link: "contact" },
];

const Aside = styled.aside`
	z-index: 10000;
`;
const BurgerButton = styled.button`
	background: none;
	border: none;
`;
const CloseButton = styled.button`
	background: none;
	border: none;
	display: flex;
	justify-content: right;
	text-align: right;

	& div {
		width: fit-content;
		text-align: center;
	}
`;
const ItemList = styled.ul`
	padding-top: 30px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	list-style-type: none;
`;
const ListItem = styled.li`
	& a {
		color: var(--color-text-primary);
		font-weight: 500;
	}
`;

const StyledDiv = styled.div`
	background-color: var(--color-bg-secondary);
	flex-direction: column;
	height: 100dvh;
	position: absolute;
	transition: all 0.3s ease-in-out;
	top: 0;
	right: 0;
	width: 290px;
	padding: 5px 10px;
	z-index: 10000;

	&.open {
		display: flex;
		height: 100dvh;
		opacity: 1;
		transform: translateX(-0px);
		width: 350px;
	}

	&.close {
		opacity: 0;
		width: 0;
		height: 0;

		& ul,
		& div,
		& button {
			display: none;
		}
	}
`;

const SocialsDiv = styled.div`
	margin: auto;
	margin-bottom: 8px;
	& div {
		padding-left: 0;
	}
`;

function Sidebar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isDark, setIsDark] = useState(false);

	function changeTheme() {
		setIsDark((isDark) => !isDark);
	}
	return (
		<Aside>
			<BurgerButton onClick={() => setIsOpen((open) => !open)}>
				<FaAlignRight fontSize="1.5rem" />
			</BurgerButton>
			<StyledDiv className={`${isOpen ? "open" : "close"}`}>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}>
					{isDark ? (
						<FaSun
							fontSize="1.5rem"
							onClick={changeTheme}
							style={{ cursor: "pointer" }}
						/>
					) : (
						<FaMoon
							fontSize="1.5rem"
							onClick={changeTheme}
							style={{ cursor: "pointer" }}
						/>
					)}

					<CloseButton>
						<div onClick={() => setIsOpen(false)}>
							<IoClose fontSize="2rem" />
						</div>
					</CloseButton>
				</div>
				<ItemList>
					{sections.map((section, idx) => (
						<ListItem key={idx}>
							<a href={`#${section.link}`}>{section.value}</a>
						</ListItem>
					))}
				</ItemList>
				<SocialsDiv>
					<p>
						Contact Me: <FaArrowDown />
					</p>
					<Socials />
				</SocialsDiv>
			</StyledDiv>
		</Aside>
	);
}

export default Sidebar;
