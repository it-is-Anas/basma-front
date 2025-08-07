import React from "react";
import { useProfile } from "../hooks/useProfile";
import { ProfileCard } from "../components/ProfileCard";

export function ProfilePage() {
  const { profile, loading, error } = useProfile("123");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <ProfileCard profile={profile} />;
}