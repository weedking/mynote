
// import React, { Component } from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // isToggleOn: true,
            inputValue : '123',
            amount: 555
        };

        // This binding is necessary to make `this` work in the callback
        // this.handleClick = this.handleClick.bind(this);
        // this.changeInputValue = this.changeInputValue(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

// 请求后台数据
    changeInputValue(){
        /* 查询数据的格式 */
        let filter={
            object:{
                object:{

                }
            }
        }
        var preurl = "http://localhost:8080/showNote?no=";
        var url = preurl + this.state.inputvalue;
        // var url ="http://localhost:8080/showNote?no=1";
        var getInformation ={
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            /* json格式转换 */
            body:JSON.stringify(filter)
        }
        fetch(url,getInformation)
            .then(response => response.json())
            .then(responseJson=>{
                // 返回的数据 根据自己返回的json格式取值
                debugger;
                console.log(responseJson)
                this.setState({
                    // inputValue:json[0]
                    // object:json.object.list
                    // inputValue:9994
                    // inputValue:json.object.list
                    inputValue:responseJson.content

                })
            })
    }

    handelChange(){
        let value=this.refs.input.value
        this.setState({
            inputvalue: value
        })
    }

    render() {
        return (
            <div>
                <input value={this.state.inputValue}/>
                {/*<input*/}
                    {/*type="number"*/}
                    {/*ref={cashMoney => this.amount = cashMoney}/>*/}

                <input value={this.state.amount} />

                <input type="number" ref='input' onChange = {this.handelChange.bind(this)}/>
                <p>{this.state.inputvalue}</p>

                <button className='red-btn' onClick={this.changeInputValue.bind(this)} >search</button>
            </div>
        );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
);
