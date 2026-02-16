import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Compass, CalendarDays, PlusSquare, User } from "lucide-react";

const footerLinks = [
	{ label: "Discover", href: "/discover", icon: Compass },
	{ label: "Events", href: "/events", icon: CalendarDays },
	{ label: "Create", href: "/create", icon: PlusSquare },
	{ label: "Profile", href: "/profile", icon: User },
];

const Footer: React.FC = () => {
	const location = useLocation();

	return (
		<footer className="fixed bottom-0 left-0 right-0 z-50 w-full border-t border-border bg-background shadow-sm">
			<div className="mx-auto flex max-w-6xl px-4">
				<nav className="flex w-full items-center justify-between py-3">
					{footerLinks.map((link) => {
						const isActive = location.pathname === link.href;
						const Icon = link.icon;
						return (
							<Link
								key={link.label}
								to={link.href}
								className={`flex flex-1 flex-col items-center gap-1 text-xs font-bold text-gray-600 ${
									isActive
										? "text-pink-500"
										: "text-muted-foreground hover:text-pink-600"
								}`}
							>
								<Icon className={`h-5 w-5 ${isActive ? "text-pink-500" : "text-muted-foreground"}`} />
								<span>{link.label}</span>
							</Link>
						);
					})}
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
