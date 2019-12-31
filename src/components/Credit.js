import React, { Component } from 'react'
import img from './card1-1.jpg'
class Credit extends Component {
    state = {
        name: "jo",
        number: "",
        month: "",
        CCV: "",

    }

    nameChange = (v) => {
        let myValue=v.target.value
        console.log(myValue)
     if(myValue.length < 20 ){
        this.setState({
            name: v.target.value
        },()=>{
            // console.log(this.state.name==="jobran")
        });
     }

    }
    numberChange = (d) => {

        var regexCard = /^\d+$/;
        if (regexCard.test(d.target.value)) {
        this.setState({
            number: d.target.value.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,'') 
        });
       }


    }





    monthChange = (M) => {
        this.setState({
            month: M.target.value
        });
    }
    
    ccvChange = (C) => {
        this.setState({
            CCV: C.target.value
        });
    }


    ////////////////
    render() {
     
        return (
            <div>
                <div style={{
                    display:"flex"
                }} className='card'>
                    <div>
                        <p className='name'>{this.state.name}</p>
                        <p className='number'>{this.state.number}</p>
                        <p className='month'>{this.state.month}</p>
                        
                        <p className='ccv'>{this.state.CCV}</p>
                    </div>
                    <img className="img" src={img} />
                    <div className='card-input'>
                        <label>NAME <br />
                            <input type="text"  value={this.state.name}  onChange={v=>this.nameChange(v)} />
                        </label>
                        <br />
                        <label>NUMBER <br />
                            <input type="text" value={this.state.number} onChange={this.numberChange} />
                        </label>
                        <br />
                        <label>MONTH<br />
                            <input type="text" onChange={this.monthChange} />
                        </label>
                        <br />
                        <label>CVV <br />
                            <input type="text" onChange={this.ccvChange} />
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}
export default Credit









