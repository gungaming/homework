import { useCallback, useEffect, useMemo, useState } from "react"

export const useCounterCalculator = () => {
    const [answer, setAnswer] = useState<number>(0);
    const [first_input, setFirstInput] = useState<number>(0);
    const [second_input, setSecondInput] = useState<number>(0);
    const [numberOne_input, setNumberOne] = useState<string>("");
    const [numberTwo_input, setNumberTwo] = useState<string>("");
    const [numberThree_input, setNumberThree] = useState<string>("");
    const [numberFour_input, setNumberFour] = useState<string>("");
    const [numberFive_input, setNumberFive] = useState<string>("");
    const [numberSix_input, setNumberSix] = useState<string>("");
    const [numberSeven_input, setNumberSeven] = useState<string>("");
    const [numberEight_input, setNumberEight] = useState<string>("");
    const [numberNine_input, setNumberNine] = useState<string>("");
    const [numberZero_input, setNumberZero] = useState<string>("");

    const plus = useCallback(
        () => {
            setAnswer(first_input + second_input)
        },
        [first_input, second_input],
    )

    const minus = useCallback(
        () => {
            setAnswer(first_input - second_input)
        },
        [first_input, second_input],
    )

    const resetCalculator = useCallback(
        () => {
            setAnswer(0)
        },
        [],
    )

    const multiple = useCallback(
        () => {
            setAnswer(first_input * second_input)
        },
        [first_input, second_input],
    )

    const divide = useCallback(
        () => {
            setAnswer(first_input / second_input)
        },
        [first_input, second_input],
    )

    const answerComponent = useMemo (() => {
       return <div>answer : {answer}</div>
    }, [answer])

    useEffect(() => {
        if (answer || answer === 0) {
            console.log('answer from custom hook', answer);
        }
    }, [answer])

    return { plus , minus , resetCalculator , answerComponent, multiple , divide , setFirstInput , setSecondInput}
}