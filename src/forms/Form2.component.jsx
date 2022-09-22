import React, { Component } from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap"

export default class Form2 extends Component {initialState = {
    email: "",
    password: "",
    confirmPassword: "",
    graduation: "",
    gender: "",
    languages: [],
    inputData: {
        graduations: ["Ön Lisans", "Lisans", "Yüksek Lisans"],
        genders: ["Erkek", "Kadın"],
        languages: ["Türkçe", "İngilizce", "Almanca", "Japonca"],
    },
    formSending: false,
    isLogin: false
}

constructor() {
    super();
    this.state = {
        ...this.initialState
        }
    };


inputChange = (event) => {
    if (event.target.type === "checkbox"){
        if (event.target.checked) {
            this.setState({
                [event.target.name]: this.state[event.target.name].concat([event.target.value])
            });
                           
        }else{
            this.setState({
                [event.target.name]: this.state[event.target.name].filter(val => val !== event.target.value)
            })
        }
    }else {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
}
    
    
    
   


formSubmit = (event) => {
    event.preventDefault();
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

clearForm = () => {
    this.setState({
        ...this.state.initialState
    });
    this.userCreateForm.reset();

}
render() {
    return(
        this.state.isLogin ? 
            <div><h1>Hoşgeldiniz</h1></div>
        
            :this.state.formSending ? 
                <div><h1>Giriş Yapılıyor</h1></div>
                :
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <Form ref={(el) => this.userCreateForm = el}>
                        <Form.Group>
                            <Form.Label>E-posta Adresi</Form.Label>
                            <Form.Control type="email" name="email" value={this.state.email} onChange={this.inputChange} ></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Parola</Form.Label>
                            <Form.Control type="password" name="password" value={this.state.password} onChange={this.inputChange} ></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Mezuniyet</Form.Label>
                            <Form.Control as="select" defaultValue="DEFAULT" value="DEFAULT" onChange={this.inputChange} >
                                <option value="DEFAULT">Seçim Yapınız</option>
                                {this.state.inputData.graduations.map((graduation) => (
                                    <option key={graduation} name="graduation" value={graduation}>
                                    {graduation}
                                    </option>
                                        )
                                    )
                                }
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Cinsiyet</Form.Label>
                            {this.state.inputData.genders.map((gender) => (
                                <Form.Check key={gender} type="radio" label={gender} value={gender} name="gender" onChange={this.state.inputChange} />
                            ))}
                        </Form.Group>

                        <Button variant="secondary"  className="mr-2" onClick={this.clearForm}>Temizle</Button>
                        <Button variant="primary"  className="mr-2" type="submit">Kayıt Ol</Button>

                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}
}
    

