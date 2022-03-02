import React, { useState } from "react";
import ReactDOM from "react-dom";

interface AppProps {
    color?: string;
}

interface AppState {
    counter: number;
}

// функциональный компонент
// const App = ({color}: AppProps): JSX.Element => {
//     const [counter, setCounter] = useState<number>(0);

//     const onIcrement = (): void => {
//         setCounter(prev => prev + 1)
//     }

//     const onDecrement = (): void => {
//         setCounter(prev => prev - 1)
//     }

//   return (
//         <div>
//             <button onClick={onIcrement}>+</button>
//             <button onClick={onDecrement}>-</button>
//             <div>{counter}</div>
//             <div>{color}</div>
//         </div>  
//   )  
// };

// классовый компонент
class App extends React.Component<AppProps, AppState> {

    // state = {counter: 0} в js это определение стейта и определение в конструкторе одинаково, но в ts это два разных подхода. И в подходе, где нужен конструтор, там мы должны передавать второй дженерик

    constructor(props: AppProps) {
        super(props);
        this.state = {counter: 0}
    }

    onIcrement = (): void => {
        this.setState({ counter: this.state.counter + 1 })
    }

    onDecrement = (): void => {
        this.setState({ counter: this.state.counter - 1 })
    }

    render() {
        return (
            <div>
                <button onClick={this.onIcrement}>+</button>
                <button onClick={this.onDecrement}>-</button>
            <div>{this.state.counter}</div>
            <div>{this.props.color}</div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
