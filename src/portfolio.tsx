import PortfolioCard from "./portfolio-card"
import { PortfolioEntry } from "./types/portfolio-entry"

const portfolioEntries: PortfolioEntry[] = [
	{
		title: "This Website",
		subtitle: "TypeScript, React, Linux, Docker",
		link: "https://github.com/WallyMitko/personal-website",
		date: new Date(2024, 1),
		bulletPoints: [
			"Written in TypeScript using React, hosted on my home server using Docker"
		]
	}
]

export default function Portfolio() {
	return (
		<div id="portfolio">
			{portfolioEntries.map(entry => {return <PortfolioCard entry={entry} key={entry.title} />})}
			<div className="resume-card">
				<p>More coming soon - I'm always learning new technologies to build new projects!</p>
			</div>
		</div>
	)
}