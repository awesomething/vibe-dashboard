import React, { useState } from "react";
import { ArrowRight, CalendarDays, CheckCircle2, ShieldCheck } from "lucide-react";

export function ContactForm({ styles }: { styles: any }) {
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setSubmitted(true);
	}

	return (
		<div className={styles.formPanel} id="contact">
			<div className={styles.formHeading}>
				<div>
					<h2>What needs fixing?</h2>
				</div>
				<CalendarDays size={24} />
			</div>
			{submitted ? (
				<div className={styles.successState}>
					<CheckCircle2 size={38} />
					<h3>Request received.</h3>
					<p>A Fruits of Labor team member will follow up with the next best step.</p>
					<button type="button" onClick={() => setSubmitted(false)}>
						Send another request
					</button>
				</div>
			) : (
				<form className={styles.requestForm} onSubmit={handleSubmit}>
					<label>
						Your name
						<input required name="name" placeholder="First and last name" />
					</label>
					<label>
						Phone number
						<input required name="phone" type="tel" placeholder="(943) 266-2092" />
					</label>
					<label>
						What can we help with?
						<select name="service" defaultValue="Emergency plumbing">
							<option>Emergency plumbing</option>
							<option>Water heater</option>
							<option>Drain or sewer</option>
							<option>Fixture installation</option>
							<option>Home improvement</option>
						</select>
					</label>
					<button className={styles.submitButton} type="submit">
						Get a clear next step <ArrowRight size={18} />
					</button>
				</form>
			)}
			<p className={styles.formPrivacy}>
				<ShieldCheck size={15} /> Your information stays between us and the work.
			</p>
		</div>
	);
}
