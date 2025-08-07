import { useState, useEffect } from "react";
import { fetchProfile } from "../api";

export function useProfile(userId: string) {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchProfile(userId)
      .then(data => {
        setProfile(data);
        setError(null);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [userId]);

  return { profile, loading, error };
}