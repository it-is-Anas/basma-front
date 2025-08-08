import { useState } from 'react';
import type { project } from '../../../types';
import { PROJECTS } from '../../../FAKEDATA'; 

export default function useProject(){
    const [projects] = useState<project[]>(PROJECTS);

    return {
        projects,
    };
}