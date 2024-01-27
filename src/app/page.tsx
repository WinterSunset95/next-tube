import styles from "./page.module.css";

export default function Home() {
  return (
	<main className={styles.main}>
		This is the home page <br/>
		Some pages to work on:
		<ul className={styles.ul}>
			<li><a href="/anime/naruto">Anime Page</a></li>
			<li><a href="/search">Search</a> (assigned to WinterSunset95)</li>
			<li><a href="/anime/naruto/ep1">Episode Page</a></li>
		</ul>
	</main>
  );
}
