export * from "./components/ProfileCard";
export * from "./pages/ProfilePage";
export * from "./hooks/useProfile";
// Exporting everything from "./api" allows other modules to access API functions like fetchProfile from a single entry point.
// This improves modularity and makes imports cleaner for consumers of the profile feature.
export * from "./api";