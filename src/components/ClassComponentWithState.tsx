import {Component} from "react";

type Props = {};

type State = {
    count: number;
};

class ClassComponentWithState extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { count: 1 };
    }
    increase=() => {
        this.setState({count: this.state.count * Math.pow(2, 8)});
    }
    render() {
        return (
            <>
                <h1 className="text-center my-12">Count is <strong>{this.state.count}</strong></h1>
                <div className="text-center mt-12">
                    <button className="bg-cf-dark-red text-pink-200 py-2 px-4"
                            onClick={this.increase}
                    >
                        Increase
                    </button>
                </div>
            </>
        )
    }
}

export default ClassComponentWithState;