import React from 'react';

export default class ContactCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'd',
            phone: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        let nextState = {};
        // nextState[e.target.name] = e.target.value;
        // console.log('nextState:',nextState.name)
        this.setState(nextState)

        //
        // this.setState({
        //   name: e.target.value,
        //   phone: e.target.value
        //
        // });
        console.log('nextState:',this.state.name)
    }

    handleClick() {
        const contact = {
            name: this.state.name,
            phone: this.state.phone
        };

        this.props.onCreate(contact);

        this.setState({
            name: '',
            phone: ''
        });
    }

    render() {
        return (
            <div>
                <h2>Create Contact</h2>
                <p>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="phone"
                        onChange={this.handleChange}
                    />
                </p>
                <button onClick={this.handleClick}>Create</button>
            </div>
        )
    }
}

ContactCreate.propTypes = {
    onCreate: React.PropTypes.func
};

ContactCreate.defaultProps = {
    onCreate: () => { console.error('onCreate not defined'); }
  }
