import queryContext from "./queryContext";

const QueryState = (props) => {
    const state = {
        query: ""
    }

    return (
        <queryContext.Provider value={state}>
            {props.children}
        </queryContext.Provider>
    )
}

export default QueryState;