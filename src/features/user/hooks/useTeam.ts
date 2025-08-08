import { useState } from "react";
import { TEAMS } from "../../../FAKEDATA";
import type { team } from "../../../types";


export default function useTeam(){
    const [teams] = useState<team[]>(TEAMS);

    return {
        teams,
    };
}