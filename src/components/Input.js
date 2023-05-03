import react from 'react';
import $ from 'jquery';

export class Input extends react.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        let name = document.querySelector("#name");
        e.preventDefault();
        console.log(name.value);
        $.get('https://api.agify.io?name='+name.value, function(data){
            console.log(data);
        });
    }

    render() {
        return (
            <form>
                <input id= "name" placeholder='Name' required></input>
                <br></br>
                <button onClick={this.onSubmit} type="submit" form="form">Search </button>
            </form>
        );
    }



}
