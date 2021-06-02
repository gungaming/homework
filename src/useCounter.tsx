import { useCallback, useEffect, useMemo, useState } from "react"

export const useCounter = () => {
    const [counter, setCounter] = useState<number>(0);

    const increaseCounter = useCallback(
        () => {
            setCounter((prev: number) => prev + 1)
        },
        [],
    )

    const decreaseCounter = useCallback(
        () => {
            setCounter((prev: number) => prev - 1)
        },
        [],
    )

    const resetCounter = useCallback(
        () => {
            setCounter((prev: number) => prev = 0)
        },
        [],
    )

    const multipleCounter = useCallback(
        () => {
            setCounter((prev: number) => prev * 2)
        },
        [],
    )

    const divideCounter = useCallback(
        () => {
            setCounter((prev: number) => prev / 2)
        },
        [],
    )

    const counterComponent = useMemo (() => {
       return <div>counter : {counter}</div>
    }, [counter])

    useEffect(() => {
        if (counter || counter === 0) {
            console.log('counter', counter);
        }
    }, [counter])



    return { increaseCounter , decreaseCounter , resetCounter , counterComponent, multipleCounter , divideCounter }
}