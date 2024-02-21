import { ResumeEntry } from "./types/resume-entry";

const dateFormatter = new Intl.DateTimeFormat("default", {
	month: "short",
	year: "numeric"
})

export default function ResumeCard(props: {entry: ResumeEntry}) {
	return (
		<div className="resume-card">
			<h3 className="resume-entry-title">{props.entry.title}</h3>
			<p className="resume-entry-subtitle">{props.entry.subtitle}</p>
			<p className="resume-entry-dates">{dateFormatter.format(props.entry.startDate)} - {props.entry.ongoing ? "Present" : dateFormatter.format(props.entry.endDate)}</p>
			<ul>
				{props.entry.bulletPoints.map(point => { return <li>{point}</li>})}
			</ul>
		</div>
		
	)
}