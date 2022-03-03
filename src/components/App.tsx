import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from '../redux/actions';
import { StoreState } from "../redux/reducers";

interface AppProps {
    todos: Todo[];
    fetchTodos: Function;
    deleteTodo: typeof deleteTodo;
}

interface AppState {
    fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);

        this.state = { fetching: false }
    }

    componentDidUpdate(prevProps: AppProps): void {
        if (!prevProps.todos.length && this.props.todos.length) {
            this.setState({ fetching: false })
        }
    }

    handleClickFetch = (): void => {
        this.props.fetchTodos();
        this.setState({ fetching: true })
    };

    handleClickDelete = (id: number): void => {
        this.props.deleteTodo(id);
    };

    renderTodos(): JSX.Element[] {
        return this.props.todos.map((todo: Todo) => {
            return <button key={todo.id} onClick={() => this.handleClickDelete(todo.id)}>{todo.title}</button>
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClickFetch}>Fetch</button>
                {this.state.fetching && (
                    <div>loading...</div>
                )}
                <div>
                    {this.renderTodos()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
    return { todos: state.todos }
};

export const App = connect(
    mapStateToProps,
    { fetchTodos, deleteTodo }
)(_App);
