import React from "react";

export function ProfileCard({ profile }: { profile: any }) {
  if (!profile) return null;
  return (
    <div>
      <h2>{profile.name}</h2>
      <p>Age: {profile.age}</p>
    </div>
  );
}