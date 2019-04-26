// import React, { Component } from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // isToggleOn: true,
            inputValue : '好人',
            amount: 555,
            content: '',
            title1:'',
            date: new Date(),
            id: 1

        };

        // This binding is necessary to make `this` work in the callback
        // this.handleClick = this.handleClick.bind(this);
        // this.changeInputValue = this.changeInputValue(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );

    }

    tick() {
        this.setState({
            date: new Date()
        });
        // this.changeInputValue();
        this.getNoteList();
    }

    componentWillUnmount() {
        clearInterval(this.timerID);

    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

//保存新笔记
    saveNewNote(){
        let filter={
            object:{
                object:{

                }
            }
        }
        var preurl = "http://localhost:8080/addNote?no=11&content=";
        var url = preurl + this.state.content;
        // var url = preurl + this.state.id;

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
                    inputValue:responseJson.content

                })
            })
    }

    //更新新笔记内容
    handelNewNoteChange(){
        let value=this.refs.textarea.value
        this.setState({
            content: value
        })
    }

// 按ID请求后台数据查询
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
        // var url ="http://localhost:8080/showNote?no=2";
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

//从后台获得title列表
    getNoteList(){
        /* 查询数据的格式 */
        let filter={
            object:{
                object:{

                }
            }
        }

        var url ="http://127.0.0.1:8080/getNoteList";
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
                    title1:eval(responseJson)[0].title

                })
            })
    }

    //获得查询框的值，并更新内置的inputvalue值
    handelChange(){
        let value=this.refs.input.value
        this.setState({
            inputvalue: value
        })
    }


    NewNote(){
        this.setState({
            content: ''
        })
    }


    render() {
        return (
            <div className="container">
                <div className="leftbox">
                    <button className='newNote' onClick={this.NewNote.bind(this)} >新建</button>
                    <h2>这是 {this.state.title1}.</h2>
                    {/*{this.changeInputValue.bind(this)}*/}
                    {/*<ul>*/}
                        {/*{*/}
                            {/*title.map(function (title) {*/}
                                {/*return <li>{title}</li>*/}
                            {/*})*/}
                        {/*}*/}
                    {/*</ul>*/}
                </div>

                <div className="rightbox">
                    <p>
                        请输入查询ID：
                        <input type="number" ref='input' onChange = {this.handelChange.bind(this)}/>
                        <button className='red-btn' onClick={this.changeInputValue.bind(this)} >查询</button>
                    </p>

                    <p>
                        查询结果：
                        <input value={this.state.inputValue}/>
                    </p>

                    <p>
                        <h2>新笔记:</h2>
                        <textarea cols="30" rows="8"  ref='textarea' value={this.state.content} onChange = {this.handelNewNoteChange.bind(this)}/>
                        <button className='saveNewNote' onClick={this.saveNewNote.bind(this)} >保存</button>
                        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                        {/*{this.state.inputvalue}*/}
                    </p>
                    {/*笔记内容：*/}
                    {/*<p>{this.state.content}</p>*/}
                    {/*查询关键字：*/}
                    {/*<p>{this.state.inputvalue}</p>*/}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
);