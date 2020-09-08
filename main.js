import {myCreateEle,Component,render} from "./toy-react.js"

class MyComponent extends Component{
    render(){
        return <div><h1>my component </h1>{this.children}</div>
    }
}

render(<MyComponent id="name" class="person">
    <div name="wang">abc</div>
    <div name="li"></div>
    </MyComponent>,document.body);