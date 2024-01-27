import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en">
		<head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			<meta charSet="utf-8"/>
			<title>NextTube</title>
		</head>
		<body className="dark">
			<Header />
			{children}
		</body>
	</html>
	);
}
