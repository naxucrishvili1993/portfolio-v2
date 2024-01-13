import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaArrowRightLong, FaDownload } from "react-icons/fa6";
import toast from "react-hot-toast";

const StyledHome = styled.section`
	align-items: center;
	display: flex;
	height: 100dvh;
	justify-content: center;
`;

const StyledHeader = styled.h1`
	color: white;
	width: 80%;
	font-size: 14px;
	font-weight: 700;
	display: flex;
	flex-direction: column;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	@media (min-width: 300px) {
		font-size: 1rem;
	}
	@media (min-width: 330px) {
		font-size: 1.1rem;
	}
	@media (min-width: 420px) {
		font-size: 1.4rem;
	}
	@media (min-width: 650px) {
		font-size: 2rem;
	}
	@media (min-width: 1200px) {
		font-size: 2.5rem;
	}
`;

const Span = styled.span`
	color: #e31b6d;
`;
const StyledLink = styled.a`
	transition: 0.5 ease-in-out;
	svg {
		transition: 200ms ease-in-out;
	}
	&:hover {
		div {
			.arrow {
				svg {
					fill: black;
					transform: rotate(90deg);
				}
			}
		}
	}
`;

function Home() {
	return (
		<StyledHome id="#section" className="flex flex-col">
			<StyledHeader className="mb-5 z-10 text-center">
				<span>
					Hello, I&apos;m <Span>Giorgi Nakhutsrishvili</Span>.
				</span>
				<span>I&apos;m a full stack web developer.</span>
			</StyledHeader>
			<div className="flex flex-col md:flex-row gap-2 mt-3">
				<a
					className="inline-flex items-center px-[17px] py-2 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent border rounded-sm md:mt-0 hover:text-black hover:bg-white focus:shadow-outline cursor-pointer"
					href="../../public/GiorgiNakhutsrishvili.pdf"
					download={true}
					target="_blank">
					<div className="flex tracking-tight gap-2">
						<span className="justify-center">Download CV</span>
						<span className="flex justify-center align-middle arrow">
							<FaDownload className="my-auto" />
						</span>
					</div>
				</a>
				<StyledLink
					className="inline-flex items-center px-4 py-2 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent border rounded-sm hover:text-black hover:bg-white focus:shadow-outline md:mt-0"
					href="#about">
					<div className="flex tracking-tight gap-2">
						<span className="justify-center">Check me out</span>
						<span className="flex justify-center align-middle arrow">
							<FaArrowRightLong className="my-auto" />
						</span>
					</div>
				</StyledLink>
			</div>
		</StyledHome>
	);
}

export default Home;
