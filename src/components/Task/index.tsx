import * as C from './style'
import { AiOutlineCloseCircle } from "react-icons/ai"

type Props = {
    task: {
        id: number,
        title: string,
        isCompleted: boolean,
    },
    onChange: (id: number, isCompleted: boolean) => void,
    onRemove: (id: number) => void,
}

export const Task = ({task, onChange, onRemove}: Props) => {

    return (
       <C.TaskBox completed={task.isCompleted}>
        <C.Box>
            <input 
                type="checkbox" 
                checked={task.isCompleted} 
                onChange={e => onChange(task.id, e.target.checked)}
            />

            <span>
                {task.title}
            </span>
        </C.Box>
            <C.ButtonRemove onClick={()=>onRemove(task.id)}>
                <AiOutlineCloseCircle/>
            </C.ButtonRemove>
       </C.TaskBox> 
    )
};
