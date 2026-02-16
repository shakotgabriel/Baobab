
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";

const HomePage: React.FC = () => (
  <section className="space-y-3">
    <h1 className="text-2xl font-semibold text-foreground">
      Discover local events
    </h1>
    <p className="text-sm text-muted-foreground">
      Browse what’s happening near you, save favorites, and meet new people.
    </p>
  </section>
);

const DiscoverPage: React.FC = () => (
  <section className="space-y-2">
    <h1 className="text-2xl font-semibold text-foreground">Discover</h1>
    <p className="text-sm text-muted-foreground">
      Find trending experiences curated for you.
    </p>
  </section>
);

const EventsPage: React.FC = () => (
  <section className="space-y-2">
    <h1 className="text-2xl font-semibold text-foreground">Events</h1>
    <p className="text-sm text-muted-foreground">
      Browse upcoming events and RSVP quickly.
    </p>
  </section>
);

const CreatePage: React.FC = () => (
  <section className="space-y-2">
    <h1 className="text-2xl font-semibold text-foreground">Create</h1>
    <p className="text-sm text-muted-foreground">
      Start a new event and invite your community.
    </p>
  </section>
);

const ProfilePage: React.FC = () => (
  <section className="space-y-2">
    <h1 className="text-2xl font-semibold text-foreground">Profile</h1>
    <p className="text-sm text-muted-foreground">
      Manage your account, preferences, and saved events.
    </p>
  </section>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
