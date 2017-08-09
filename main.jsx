class App extends React.Component {
    constructor(props) {
        super(props);

        const initialData = Immutable.List([true, false, true, true]);
        this.state = { checkboxFlags: initialData, all: false };
    }

    handleChange(index, e) {
        const newFlags = this.state.checkboxFlags.update(index, (old) => !old);

        this.setState({ ...this.state, checkboxFlags: newFlags });

        return false;
    }

    handleAllChange(e) {
        const newFlags = this.state.all ?
            Immutable.List([false, false, false, false]) :
            Immutable.List([true, true, true, true]);

        this.setState({ checkboxFlags: newFlags, all: !this.state.all })

        return false;
    }

    render() {
        const toChecked = (flag) => flag ? "checked" : "";

        const checkboxes = this.state.checkboxFlags.map((flag, idx) =>
                <input
                    type="checkbox"
                    checked={toChecked(flag)}
                    onChange={(e) => this.handleChange(idx, e) }
                />
            );

        return <div>
            <p>all</p>
            <input
                type="checkbox"
                checked={toChecked(this.state.all)}
                onChange={(e) => this.handleAllChange(e)}
            />
            <p>checkbox</p>
            {checkboxes}
        </div>;
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
