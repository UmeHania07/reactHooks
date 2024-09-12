import React, { Component, createRef } from 'react'

export default class RefCompo extends Component {
    constructor(props) {
        super(props)
        this.myRef = createRef();
    }
    componentDidMount() {
        console.log(this.myRef);
        console.log(this.myRef.current.innerHTML)
    }
    handleheading = () => {
        this.myRef.current.align = "center";
        // this.myRef.current.hidden= true;
        this.myRef.current.style.color = "red";
        this.myRef.current.style.backgroundColor = "yellow ";
    }

    render() {
        return (
            <div>
                <h1 ref={this.myRef}>Heres Start my Journey</h1>
                <button onClick={this.handleheading}>Click Me</button>



            </div>
        )
    }
}
