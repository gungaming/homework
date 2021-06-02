import { createContext, useState, useCallback, useEffect } from "react";

interface IContextProp {
    children: any
}

type Student = {
    id: number,
    name: string
}

type StudentList = Array<Student> | [];

const AppContext = createContext<any>(null);

const AppProvider = (({ children } : IContextProp) => {
    const [studentList, setStudentList] = useState<Array<Student>>([]);

    const addStudent = useCallback(
        ({ id, name}: Student) => {
            setStudentList((prev) => {
                const newData = [...prev];
                newData.push({ id, name });
                return newData;
            })
        },
        [],
    )

    const removeStudent = useCallback(
        (id) => {
            setStudentList((prev) => {
                const newData = prev.filter((student) =>
                    student.id !== id
                )
                return newData;
            })
        },
        [],
    )

    useEffect(() => {
        console.log('studentList ', studentList);
    }, [studentList])

    const value = {
        studentList,
        setStudentList,
        addStudent,
        removeStudent
    }

    return <AppContext.Provider value ={ value }>
        {children}
    </AppContext.Provider>
})

export { AppContext, AppProvider }