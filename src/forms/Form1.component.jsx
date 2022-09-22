
import React, { Component } from "react";


export default class Form1 extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            formSending: false,
            isLogin: false,
            errors: {
                username: "",
                password: "",
                formError: ""

            }
        };
    }
    isEmailValid = (email) => /\S+@\S+\.\S+/.test(email);

    inputChange = (event) => {
        
        this.setState(
            {
                [event.target.name] : event.target.value
            }
        )

        let max = Number(event.target.max);
        let required = event.target.required;
        
        this.setState({
            errors: {
                ...this.state.errors,
                [event.target.name]: ""

            }
        });

        if(event.target.name === "username" && this.isEmailValid(this.state.username) === false){
            this.setState({
                errors: {
                    ...this.state.errors,
                    username: "Email hatalı, kontrol edin" 
                }
            });
        }

        if (required && event.target.value === "") {
            this.setState({
                errors: {
                    ...this.state.errors,
                    [event.target.name]: ""
                }
            });
        }
        if(event.target.value.length > max) {
            this.setState({
                errors:{
                    ...this.state.errors,
                    [event.target.name]: "Giriş hatalı" + event.target.max + "sınırı aşıldı"
                }
            });
        }
    }

    formSubmit = () => {
        this.setState({
            formSending: true
        });
        setTimeout( () => {
            this.setState({
                formSending: false,
                isLogin: true
            });
        }, 1000);
    }
    render() {
        return(
            this.state.isLogin ? 
            <div><h1>Hoşgeldiniz</h1></div>
            
            :this.state.formSending ? 
            <div><h1>Giriş Yapılıyor</h1></div>
            :
            <div>
                <h5>Form 1</h5>
                <form onSubmit={this.formSubmit}>
                    <label>Kullancı Adı</label><br />
                    <input type="email" name="username" value={this.state.username} onChange={this.inputChange} max="32" required/> <br />
                    <small>{this.state.errors.username}</small> <br />
                    <label>Parola</label><br />
                    <input type="password" name="password" value={this.state.password} onChange={this.inputChange} max="16" required/> <br />
                    <small>{this.state.errors.password}</small><br />
                    <input type="submit" name="submit" value="Giriş"/> <br />
                    
                </form>
            </div>
        )
    }
}