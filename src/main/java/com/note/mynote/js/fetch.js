// import React, { Component } from 'react';


class HelloWorld extends React.Component {
    /**
     * 初始化
     * @param {*} props
     */
    constructor(props){
        super(props);
        this.state = {
            inputValue : ''
        }

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
        var url ="http://localhost:8080/showNote?no=1";
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
            .then(json =>{
                // 返回的数据 根据自己返回的json格式取值
                debugger;
                this.setState({
                    inputValue:json[0].content
                })
            })
    }

    render() {
        return (
            <div >
                <div>
                    <input value={this.state.inputValue} />
                    <button className='red-btn' onClick={this.changeInputValue.bind(this)} >search</button>
                </div>
                <ul>
                    <li></li>
                </ul>

            </div>
        );
    }
}

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('root')
);

export default HelloWorld;
