import { useContext } from "react";
import {AppContext} from "Context/AppContext";

type Student = {
    id: number | string,
    name: string
}

const StudentBoard = () => {
    const { studentList, removeStudent } = useContext(AppContext);

    return (
        <>
            {studentList.map(({ id, name }: Student, index: number) => {
                return (
                    <div key={index}>
                    <div>
                        ID: {id}
                    </div>
                    <div>
                        Name: {name}
                    </div>
                    <button onClick={() => { removeStudent(id) }}> - </button>
                    </div>
                )            
            })}
        </>
    )
}

export default StudentBoard