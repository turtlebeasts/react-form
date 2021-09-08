import React from "react";

export default class Q5 extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      unit: "",
      pre: "",
      final: "",
      stdName: [],
      unitTest: [],
      preTest: [],
      finalTest: []
    };
  }
  input = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  submit = () => {
    const name = this.state.stdName.concat(this.state.input);
    const unit = this.state.unitTest.concat(this.state.unit);
    const pre = this.state.preTest.concat(this.state.pre);
    const final = this.state.finalTest.concat(this.state.final);
    this.setState({
      stdName: name,
      unitTest: unit,
      preTest: pre,
      finalTest: final
    });
    this.setState({
      input: "",
      unit: "",
      pre: "",
      final: ""
    });
  };
  render() {
    return (
      <>
        <p>Create a CLI app which takes name, unit test marks, pre final marks, final marks of 5 students. And then print who has the highest marks. What if I ask you to print the average as well?</p>
        <input
          type="text"
          placeholder="Student Name"
          name="input"
          value={this.state.input}
          onChange={this.input}
        />
        <input
          type="text"
          placeholder="Unit test marks"
          name="unit"
          value={this.state.unit}
          onChange={this.input}
        />
        <input
          type="text"
          placeholder="Pre-final marks"
          name="pre"
          value={this.state.pre}
          onChange={this.input}
        />
        <input
          type="text"
          placeholder="Final marks"
          name="final"
          value={this.state.final}
          onChange={this.input}
        />
        <button onClick={this.submit}>Submit</button>
        <table>
          <tr>
            <th>Student Name</th>
            {this.state.stdName.map((name) => (
              <td>{name}</td>
            ))}
          </tr>
          <tr>
            <th>Unit Test</th>
            {this.state.unitTest.map((marks) => (
              <td>{marks}</td>
            ))}
          </tr>
          <tr>
            <th>Pre-Final</th>
            {this.state.preTest.map((marks) => (
              <td>{marks}</td>
            ))}
          </tr>
          <tr>
            <th>Final</th>
            {this.state.finalTest.map((marks) => (
              <td>{marks}</td>
            ))}
          </tr>
        </table>
      </>
    );
  }
}
