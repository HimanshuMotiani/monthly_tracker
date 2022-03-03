import React from "react"
import Activity from "./Activity";

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            textInput: "",
            inputArray: []
        }
    }
    handleInput = ({ target }) => {
        let { name, value } = target;
        this.setState({
            [name]: value
        })

    }
    closeTask = (val)=>{
        let inputArr = this.state.inputArray;
        inputArr.splice(inputArr.indexOf(val),1)
        this.setState({
            inputArray: inputArr
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log("hello");
        let inputArr = this.state.inputArray;
        var val = this.state.textInput;
        inputArr.push(val)
        this.setState({
            inputArray: inputArr
        })
        event.target.textInput.value = ""
    }
    render() {
        return (
            <>
                <div className="container">
                    <h1 className="text-4xl font-bold text-center my-5 heading-color">Monthly Activity Tracker!</h1>

                    <div>
                        <form onSubmit={this.handleSubmit} className="text-center my-4 text-2xl" >
                            <input type="text" name="textInput" onChange={this.handleInput} className="border py-1 w-3/12" placeholder="e.g. coding" />
                            <input type="submit" className="text-white primary-color px-4 py-2 rounded-sm" value="Add Activity" />
                        </form>
                    </div>
                    {this.state.inputArray.map(task => (
                        <Activity textInput={task} closeTask={this.closeTask} />
                    ))}

                </div>
            </>
        )
    }
}

export default App