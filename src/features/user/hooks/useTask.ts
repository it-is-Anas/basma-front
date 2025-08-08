import { useState } from 'react';
import type { task } from '../../../types.ts';
import { TASKS  as fakeTasks }  from '../../../FAKEDATA.ts';


export default function useTask(){
    const [tasks,setTask] = useState<task[]>(fakeTasks);
    

    const addNewTasl = (task: task) => {
        setTask(ts => [task,...ts]);
    };

    return {
        tasks,
        addNewTasl,
    };
};