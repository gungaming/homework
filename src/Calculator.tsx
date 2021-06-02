interface CalculatorProps {
    answer: number;
    first_input: number;
    second_input: number;
}

const Calculator = ({answer, first_input, second_input}: CalculatorProps) => {
    return (
        <div>
            <h1>Answer : {answer}</h1>
            <h3>Input1 : {first_input}</h3>
            <h3>Input2 : {second_input}</h3>
        </div>
    );
};

export default Calculator;