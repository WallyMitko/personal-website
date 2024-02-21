import { PortfolioEntry } from "./types/portfolio-entry"

const dateFormatter = new Intl.DateTimeFormat("default", {
	month: "short",
	year: "numeric"
})

export default function PortfolioCard(props: {entry: PortfolioEntry}) {
	return (
		<div className="resume-card">
			<h3 className="resume-entry-title"><a href={props.entry.link} target="_blank">{props.entry.title}</a></h3>
			<p className="resume-entry-subtitle">{props.entry.subtitle}</p>
			<p className="resume-entry-dates">{dateFormatter.format(props.entry.date)}</p>
			<ul>
				{props.entry.bulletPoints.map(point => { return <li>{point}</li>})}
			</ul>
		</div>
		
	)
}