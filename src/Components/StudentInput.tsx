import { AppContext } from "Context/AppContext"
import { useCallback, useContext, useState } from "react"

const StudentInput = () => {
    const { studentList, setStudentList, addStudent } = useContext(AppContext);
    const [id, setId] = useState<number | string>('');
    const [name, setName] = useState<string>('');

    const addStudentToList = useCallback(
        () => {
           addStudent({ id, name });
           setId('');
           setName(''); 
        },
        [addStudent, id, name],
    )

    return (
    <div>
        <div>
            <span>ID : </span>
            <input value={id} onChange={({ target: { value }}) => { setId(value) }}/>
        </div>
        <div>
            <span>Name : </span>
            <input value={name} onChange={({ target: { value }}) => { setName(value) }}/>
        </div>
        <button onClick={() => { addStudent({ id, name }) }}>ADD</button>
    </div>
    )
}

export default StudentInput