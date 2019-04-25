class NoteList extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onNoteListChange(e.target.value);
    }

    render() {
        // const temperature = this.props.temperature;
        // const scale = this.props.scale;
        return (
            <button>添加笔记+</button>
        );
    }

}

class NewNote extends React.Component{


    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let value=this.refs.input.value
        this.setState({
            inputvalue: value
        })
    }

    render() {
        // const temperature = this.props.temperature;
        // const scale = this.props.scale;

        // const inputValue = this.props.inputValue;
        return (
            <textarea cols="30" rows="30"  className="autotextarea" value={inputValue} ref='textarea' onChange = {this.handelChange.bind(this)}/>

        );

    }

}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // isToggleOn: true,
            inputValue : '777',
            amount: 555,
            initID: 1,

            // mydate : new Date()
        };

        // This binding is necessary to make `this` work in the callback
        // this.handleClick = this.handleClick.bind(this);
        // this.changeInputValue = this.changeInputValue(this);
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
        // var url = preurl + this.state.inputvalue;
        var url = preurl + this.state.initID;
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

    handelNoteListChange(){
        let value=this.refs.input.value
        let ot=this.refs.input.value
        this.setState({
            inputvalue: value,

        })

    }

    handleClick() {
        this.setState(prevState => ({
            inputValue : '999'
        }));
        this.handelNoteListChange()
    }

    render() {
        return (

            <div className="container">
                <div className="leftbox">
                    {/*<NoteList onNoteListChange={this.handelNoteListChange()}/>*/}
                    <NoteList onClick={this.handleClick}/>
                    {this.state.inputValue}
                </div>

                <div className="rightbox">
                    {/*<textarea cols="80" rows="50"  className="autotextarea">123</textarea>*/}

                    <NewNote> </NewNote>
                    {/*{this.state.inputValue}*/}
                </div>
            </div>


        );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
);