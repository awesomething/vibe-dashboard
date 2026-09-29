import React from "react";
import { ChevronDown, Phone } from "lucide-react";

const faqs = [
	[
		"What areas do you serve?",
		"We are based at 4525 Birdie Ln SW and serve Atlanta and nearby communities. Call with your address and we will help confirm availability.",
	],
	[
		"Can you help with an urgent leak?",
		"Yes. Call (943) 266-2092 for the fastest response. If water is flowing, shut off the nearest fixture valve or main supply first.",
	],
	[
		"What happens after I request service?",
		"A team member follows up to understand the job, ask a few practical questions, and arrange the right next step.",
	],
] as const;

export function FaqSection({ styles }: { styles: any }) {
	return (
		<section className={styles.faqSection} id="faqs">
			<div className={styles.faqIntro}>
				<p className={styles.sectionEyebrow}>Before we get started</p>
				<h2>A few good<br />questions.</h2>
				<a href="tel:+19432662092"><Phone size={17} /> Ask us directly</a>
			</div>
			<div className={styles.faqList}>
				{faqs.map(([question, answer]) => (
					<details key={question}>
						<summary>{question}<ChevronDown size={19} /></summary>
						<p>{answer}</p>
					</details>
				))}
			</div>
		</section>
	);
}
