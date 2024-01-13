export default {
	background: {
		color: {
			value: "#252934",
		},
	},
	style: {
		position: "absolute",
		height: "100dvh",
	},
	fpsLimit: 120,
	interactivity: {
		events: {
			onClick: {
				// enable: true,
				mode: "push",
			},
			onHover: {
				enable: true,
				mode: "repulse",
			},
			resize: true,
		},
		modes: {
			push: {
				quantity: 4,
			},
			repulse: {
				distance: 200,
				duration: 0.4,
			},
		},
	},
	particles: {
		color: {
			value: "#ffffff",
		},
		links: {
			color: "#ffffff",
			distance: 150,
			enable: true,
			opacity: 0.5,
			width: 1,
		},
		move: {
			direction: "none",
			enable: true,
			outModes: {
				default: "bounce",
			},
			random: false,
			speed: 3,
			straight: false,
		},
		zIndex: -100,
		number: {
			density: {
				enable: true,
				area: 800,
			},
			value: 100,
		},
		opacity: {
			value: 0.5,
		},
		shape: {
			type: "circle",
		},
		size: {
			value: { min: 1, max: 5 },
		},
	},
	detectRetina: true,
};
