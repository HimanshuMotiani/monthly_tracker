import React from "react"
class Activity extends React.Component {
    constructor(props) {
        super(props)
    this.state = {
        obj:{
            }
        }
    }

    daysInMonth = () => {
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1;
        var year = dateObj.getUTCFullYear();
        return new Date(year, month, 0).getDate();
    }
    changeBackground = (e) => {
        e.target.style.border = "1px solid"
    }
    changeBackgroundNormal = (e) => {
        e.target.style.border = ""
    }
    handleClick = (task,index)=>{
        console.log(task);
     this.setState({
         obj:{
           ...this.state.obj,
           [index]:this.state.obj[index] ? false: true
         }
     })
    }
    render() {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const dateObj = new Date();
        var month = monthNames[dateObj.getMonth()];
        var days = this.daysInMonth();
        return (
            <>
                <article className="flex my-10 shadow-xl p-2">
                    <div className="flex-15 blue flex items-center justify-center">
                        <div className="">
                            <h2 className="font-bold text-2xl">{this.props.textInput}</h2>
                            <h3 >{month}</h3>
                        </div>
                    </div>
                    <div className="flex-80 flex justify-start items-center flex-wrap ml-8 mr-4 py-4">
                        {[...Array(days)].map((x, i) =>
                            <div className={this.state.obj[i+1]? "border primary-color w-20 rounded text-center flex items-center justify-around p-2 mr-2 mb-4"
                            :"border w-20 rounded text-center flex items-center justify-around p-2 mr-2 mb-4" } 
                            key={i + 1} onClick={()=>this.handleClick(this.props.textInput,i+1)}
                             onMouseLeave={this.changeBackgroundNormal} 
                             onMouseOver={this.changeBackground}>{i+1}</div>
                        )}
                    </div>
                    <div>
                        <div className="cross cursor-pointer" onClick={()=>this.props.closeTask(this.props.textInput)}>X</div>

                    </div>
                </article>
            </>
        )
    }
}

export default Activity