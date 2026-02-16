import React from "react";
import { Link } from "react-router-dom";
import { Bell, Search } from "lucide-react";

const Header: React.FC = () => {
	return (
		<header className="w-full border-b border-border bg-background">
			<div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
				<div className="relative flex-1">
					<Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
					<input
						type="search"
						placeholder="Search events near you..."
						className="h-10 w-full rounded-full border border-input bg-muted/60 px-4 pl-10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
					/>
				</div>

				<button
					aria-label="Notifications"
					className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground"
				>
					<Bell className="h-5 w-5" />
					<span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
				</button>

				<Link to="/profile" className="flex items-center">
					<img
						src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&w=96&h=96"
						alt="Profile"
						className="h-10 w-10 rounded-full border border-border object-cover"
					/>
				</Link>
			</div>
		</header>
	);
};

export default Header;
