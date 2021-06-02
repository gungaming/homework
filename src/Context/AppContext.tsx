import { createContext, useState, useCallback, useEffect, useContext } from "react";

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
    const [studentList, setStudentList] = useState<StudentList>([]);

    const addStudent = useCallback(
        ({ id, name }: Student) => {
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

    const resetStudent = useCallback(
        () => {
            setStudentList([])
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
        removeStudent,
        resetStudent
    }

    return <AppContext.Provider value ={ value }>
        {children}
    </AppContext.Provider>
})

const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("Error context undefined");
    }
    return context
}

export { AppContext, AppProvider, useAppContext }