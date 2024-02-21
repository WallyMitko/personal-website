import { ResumeEntry } from "./types/resume-entry"
import ResumeCard from "./resume-card"

const workExperience: ResumeEntry[] = [
	{
		title: "Web Developer/IT Technician",
		subtitle: "Mercam Inc - Brighton, ON",
		startDate: new Date(2017, 0),
		endDate: new Date(),
		ongoing: true,
		bulletPoints: [
			"Optimized the company website for search engines, resulting in a significant gain in new customers in the following months",
			"Implemented bot protection on the site's contact forms, completely eliminating email spam",
			"Provided technical support for Windows and Mac computers, resulting in no company downtime due to technical issues",
			"Recommended and performed network infrastructure upgrades, greatly improving connection reliability throughout the office"
		]
	},
	{
		title: "Production Assistant",
		subtitle: "Trinity Amps - Brighton, ON",
		startDate: new Date(2017, 1),
		endDate: new Date(2021, 7),
		ongoing: false,
		bulletPoints: [
			"Monitored, maintained, and repaired computers, network devices, and CNC manufacturing equipment to ensure operation with minimal downtime",
			"Recommended and implemented DNS-based network-wide advertisement blocking, reducing the risk of malware on company computers",
			"Managed product and component inventory and reported deficiencies, ensuring products were always available to customers",
			"Designed and fabricated templates and jigs for cutting and drilling using additive and subtractive manufacturing techniques, greatly reducing the time and effort needed to produce each part"
		]
	}
]

const projects: ResumeEntry[] = [
	{
		title: "WESMA",
		subtitle: "JavaScript (Node, Express), SQL",
		startDate: new Date(2022, 8),
		endDate: new Date(2023, 3),
		ongoing: false,
		bulletPoints: [
			"Designed and built an app with a small team to manage scheduling and booking for training sessions",
			"Constructed an optimized relational database to handle the app's complex data set",
			"Implemented a backend API with Node.js and Express to provide secure access to data",
			"Deployed the backend to a virtual Windows server for compatibility with existing systems",
			"Used Git for source control, ensuring the team could collaborate without conflicting changes"
		]
	},
	{
		title: "Homelab",
		subtitle: "Linux, Docker, Networking, Computer Hardware",
		startDate: new Date(2021, 8),
		endDate: new Date(),
		ongoing: true,
		bulletPoints: [
			"Used Proxmox to host apps as virtual machines, allowing for easy backup, management, and migration",
			"Configured automatic scheduled backups to an external NAS to protect against data loss",
			"Built the main server from standard components allowing for easy future repairs and modifications",
			"Set up a Wireguard VPN server to allow apps to be accessed remotely while maintaining security",
			"Configured network infrastructure to allow services to be reached from outside the local network",
			"That's where this website is hosted :)"
		]
	},
	{
		title: "Sorted",
		subtitle: "JavaScript (Node, Express, React), MySQL",
		startDate: new Date(2022, 0),
		endDate: new Date(2022, 3),
		ongoing: false,
		bulletPoints: [
			"Designed and built a web-based game to teach users the mechanics of sorting algorithms",
			"Collected requirements and created user stories to effectively plan out the project roadmap",
			"Adhered to the Agile Scrum framework, resulting in consistent and measurable progress",
			"Organized goals and planned sprints using Jira, making project progress easy to track",
			"Implemented data logging using a MySQL database, with an admin dashboard to view statistics",
			"Deployed the app to the Google Cloud Platform for maximum scalability and availability"
		]
	}
]

export default function Resume() {
	return (
		<div id="resume">
			<h2>Education</h2>
			<div className="resume-card">
				<h3 className="resume-entry-title">Bachelor of Engineering Science, Software Engineering</h3>
				<p className="resume-entry-subtitle">With distinction - GPA 90%</p>
				<p className="resume-entry-subtitle">University of Western Ontario - London, ON</p>
				<p className="resume-entry-dates">Sep 2019 - Apr 2023</p>
			</div>
			<h2>Skills</h2>
			<div className="resume-card">
				<p className="resume-entry-subtitle"><strong>Languages: </strong>JavaScript, TypeScript, Python, SQL, HTML, CSS, Swift, C#, C++, Java</p>
				<p className="resume-entry-subtitle"><strong>Frameworks/Libraries: </strong>Node.js, React, Express, Tk, SwiftUI, Jest, Mocha, Jasmine</p>
				<p className="resume-entry-subtitle"><strong>Tools/Software: </strong>Git, Docker, Kubernetes, Google Cloud Platform (Compute Engine, Kubernetes Engine, Cloud Functions), Jira</p>
				<p className="resume-entry-subtitle"><strong>Operating Systems: </strong>Linux (Debian, Ubuntu, Arch, Proxmox), Windows (11, 10, 8, 7), Windows Server 2019, macOS, iOS</p>
			</div>
			<h2>Work Experience</h2>
			{ workExperience.map(entry => { return <ResumeCard entry={entry} key={entry.title}></ResumeCard>})}
			<h2>Projects</h2>
			{ projects.map(entry => { return <ResumeCard entry={entry} key={entry.title}></ResumeCard>})}
		</div>
	)
}