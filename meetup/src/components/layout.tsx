import React from "react";
import Header from "./header";
import Footer from "./footer";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<Header />
			<main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-24 pt-6">
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
