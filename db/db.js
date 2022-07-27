export default {
	// skills: [
	// 	{
	// 		title: "Languages",
	// 		skillName: "JavaScript, C++",
	// 		color: "1",
	// 		percentage: "70",
	// 	},
	// 	{
	// 		title: "Frameworks/Libraries",
	// 		skillName: "Angular, Reactjs",
	// 		color: "6",
	// 		percentage: "50",
	// 	},
	// 	{
	// 		title: "Backend",
	// 		skillName: "Nodejs, MongoDB",
	// 		color: "2",
	// 		percentage: "40",
	// 	},
	// 	{
	// 		title: "Clouds",
	// 		skillName: "AWS(EC2, S3), Heroku, Netlify",
	// 		color: "3",
	// 		percentage: "30",
	// 	},
	// 	{
	// 		title: "Design",
	// 		skillName: "HTML, Bootstrap, SCSS",
	// 		color: "4",
	// 		percentage: "70",
	// 	},
	// 	{
	// 		title: "Version Control",
	// 		skillName: "GitHub, JIRA, Trello",
	// 		color: "7",
	// 		percentage: "70",
	// 	},
	// 	{
	// 		title: "Tools",
	// 		skillName: "Postman, Chrome DevTools",
	// 		color: "3",
	// 		percentage: "80",
	// 	},
	// 	{
	// 		title: "Saas products",
	// 		skillName: "CleverTap, FreshDesk",
	// 		color: "5",
	// 		percentage: "50",
	// 	},
	// 	{
	// 		title: "Editor",
	// 		skillName: "VS Code",
	// 		color: "6",
	// 		percentage: "70",
	// 	},
	// ],
	projects: {
		vrfe: [
			{
				image: "images/bryson-profile-pic.png",
				summary:
					"test.",
				preview: "",
				techStack: [
					"Unity (C#)",
					"Autodesk Maya"
				],
			},
		],
	},
	experience: [
		{
			title: "AmeriCorps NCCC",
			duration: "Aug 2021 - May 2022 (10 mos)",
			subtitle: "Corps Member (Assistant Team Leader; Diversity in Service Point of Contact)",
			details: [
				"Worked on and lived with a permanent nine-person team as we traveled the country assisting a wide variety of nonprofits",
				"Designed and implemented team activities and discussions regarding diversity throughout the program duration",
				"Volunteered over 1,700 hours in community service across the country",

				//"Collaborated with the following notable organizations: Sea Island Habitat for Humanity (Johns Island, SC), The Boys and Girls Clubs of Newport County (Newport, RI), The Tennessee Person-Centered Music Program (Nashville, TN), NECHAMA - Jewish Response to Disaster (New Orleans, LA), Pasco County Parks, Recreation, and Natural Resources (Land O' Lakes, FL), and Camp Lee (Anniston, AL).",
				
				"Southern Region Class 27B Team Tide 1"
			],
			tags: [
				"Leadership",
				"Conflict Resolution",
				"Teamwork",
				"Natural Disaster Relief",
				"Affordable Home Construction",
				"Music Therapy",
				"Childcare",
				"Summer Camp Maintenance",
				"Invasive Species Removal"
			],
			icon: "group",
		},
		{
			title: "Clemson University",
			duration: "Feb 2019 - Aug 2021 (2 yrs 7 mos)",
			subtitle: "VR Developer and Researcher",
			details: [
				"Developed a multi-platform VR app in a scrum environment designed to teach geology students how to do field work",
				"Collaborated with a diverse team of software engineers, geologists, sociologists, and educators",
				"Modified app to function as a testbed for empirical research and ran human participants (see <a href=\"/index.html#publications-section\">[Publications]</a>)",
				"Optimized app to run on low-end mobile devices",
				"On-boarded and trained two additional developers",
				"Primarily used the Unity Game Engine (C#), Maya, and Substance Painter",
				"<a href=\"/projects.html#vrfe-section\">[Click here for more information about the project, including photos]</a>"
			],
			tags: [
				"Teamwork",
				"OOP Principles",
				"Intuitve UIs",
				"Multi-Platform Builds",
				"Basic 3D Modeling",
				"Polygonal Decimation",
				"Culling",
				"Performance Optimizations",
				"VR Integration",
				"Version Control",
				"Empirical Research",
				"Scrum"
			],
			icon: "group",
		},
	],
	education: [
		{
			title: "Master of Science, Computer Science (Human-Centered Computing)",
			duration: "2020 - 2021",
			subtitle: "Clemson University",
			details: [
				"GPA: 4.0/4.0",
			],
			tags: [
				
			],
			icon: "graduation-cap",
		},
		{
			title: "Bachelors of Science, Computer Science",
			duration: "2016 - 2020",
			subtitle: "Clemson University",
			details: [
				"Cum Laude",
			],
			tags: [ 
				
			],
			icon: "graduation-cap",
		},
		{
			title: "Bachelors of Arts, Modern Languages (Spanish)",
			duration: "2016 - 2020",
			subtitle: "Clemson University",
			details: [
				"Cum Laude",
				"Additional coursework completed at Universidad Blas Pascal, Argentina (2017)"
			],
			tags: [
				
			],
			icon: "graduation-cap",
		},
	],
	awards: {
		congressional: [
			{
				image: "images/bryson-profile-pic.png",
				summary:
					"The highest honor for young adults in the U.S. for exemplary voluntary public service.",
				preview: "https://www.congressionalaward.org/",
				techStack: [
					"AmeriCorps NCCC",
					"2022",
				],
			},
		],
	},
	footer: [
		{
			label: "Links",
			data: [
				{
					text: "Linkedin",
					link: "https://www.linkedin.com/in/bryson-rudolph/",
				},
				{
					text: "GitHub",
					link: "https://github.com/b-rudo",
				},
				{
					text: "Google Scholar",
					link: "https://scholar.google.com/citations?user=xI08Sx4AAAAJ&hl=en&oi=ao",
				},
				{
					text: "Research Gate",
					link: "https://www.researchgate.net/profile/Bryson-Rudolph",
				},
			],
		},
		{
			label: "Resources",
			data: [
				{
					text: "Enable Dark/Light Mode",
					func: "enableDarkMode()",
				},
			],
		},
		{
			label: "copyright-text",
			data: [
				"Website template by Vinay Somawat.",
				"&copy; 2022"
			],
		},
	],
};
