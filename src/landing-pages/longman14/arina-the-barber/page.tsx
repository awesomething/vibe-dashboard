import styles from "./arina-the-barber.module.css";
import { ArinaLandingPage } from "./components/LandingPage";

export { meta } from "./meta";

export default function ArinaTheBarberPage() {
  return (
    <div className={`${styles.page} arina-barber-page`}>
      <ArinaLandingPage />
    </div>
  );
}
