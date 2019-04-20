

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            inputValue : '123',

        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
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
        var url ="http://localhost:8080/showNote";
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
                    // inputValue:json[0]
                    // object:json.object.list
                    inputValue:9994
                    // inputValue:json.object.list
                })
            })
    }

    render() {
        return (
            <div>
                <input value={this.state.inputValue} />
                <button className='red-btn' onClick={this.changeInputValue.bind(this)} >search</button>
                <h1>哈克就</h1>
                <input/>
            </div>

        );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
);