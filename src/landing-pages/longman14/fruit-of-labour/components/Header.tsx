import React from "react";
import { Phone } from "lucide-react";

export function Header({ styles }: { styles: any }) {
	return (
		<header className={styles.header}>
			<a href="#top" className={styles.brand} aria-label="Fruits of Labor home">
				<span className={styles.brandMark}>FL</span>
				<span className={styles.brandName}>
					Fruits of Labor
					<small>Plumbing + Home Improvements</small>
				</span>
			</a>
			<nav className={styles.nav} aria-label="Main navigation">
				<a href="#services">Services</a>
				<a href="#process">Our approach</a>
				<a href="#faqs">FAQs</a>
			</nav>
			<a href="tel:+19432662092" className={styles.headerCall}>
				<Phone size={16} />
				<span>(943) 266-2092</span>
			</a>
		</header>
	);
}
