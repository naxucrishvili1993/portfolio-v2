function ProfileInfo() {
	return (
		<div className="pt-10 block relative bg-opacity-50 z-40">
			<div className="relative mx-auto h-full px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
				<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
					<div className="max-w-xl mx-auto text-center">
						<div className="inline-flex px-4 py-5 mx-auto rounded-full mb-5">
							<h2 className="text-4xl font-semibold tracking-widest text-g uppercase">
								About Me
							</h2>
						</div>
						<div className="text-center">
							<img
								src="/profile.svg"
								className="mx-auto"
								width={300}
								style={{
									height: 300,
									objectFit: "cover",
									objectPosition: "100% 100%",
								}}
							/>
							<p className="font-bold uppercase text-xl mt-[2rem] tracking-wide">
								Who&apos;s this guy?!
							</p>
						</div>
						<p className="mt-4 text-base leading-relaxed text-gray-600 group-hover:text-white tracking-wide">
							I&apos;m a Web Developer with more than one year of experience,
							focused on quality and clean code. With a passion for both
							software development and personal growth, I attended 200+ hour
							bootcamps to learn new technologies and languages.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileInfo;
