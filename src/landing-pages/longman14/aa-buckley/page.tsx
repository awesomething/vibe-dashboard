import styles from "./aa-buckley.module.css";
import { AABuckleyLandingPage } from "./components/LandingPage";

export { meta } from "./meta";

export default function AABuckleyPage() {
	return (
		<div className={styles.page}>
			<AABuckleyLandingPage />
		</div>
	);
}
