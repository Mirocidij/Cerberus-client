import './css/App.css';
import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label, Spinner } from 'reactstrap';
import blue from '../../images/blue-sky-103.jpg'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSubmitting: false,
            loginForm: {
                email: "",
                password: ""
            }
        };
    }

    render() {
        let handleSubmit = (event) => {
            event.preventDefault();

            this.setState({
                isSubmitting: true
            })

            setTimeout(() => {
                console.log("Xui")
                this.setState({
                    isSubmitting: false
                });
            }, 3000)

            console.log(this.state.loginForm)
        }

        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignContent: "space-between",
                    alignItems: "center",
                    flexDirection: "column",
                    backgroundImage: `url(${blue})`,
                    width: "auto",
                    height: "100vh",
                }}
                className="Home">

                <div style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",

                    background: "inherit",
                    filter: "blur(10px)",
                    border: "2px solid black"
                }} />

                <Form
                    onSubmit={handleSubmit}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        alignItems: "center",
                        alignContent: "center",

                        borderRadius: 15,
                        width: "20%",
                        height: "25%",
                        zIndex: 1,
                    }}
                    className="login-form">
                    <FormGroup style={{
                        width: "80%"
                    }}>
                        <Label for="emailExample">Email:</Label>
                        <Input
                            type="email"
                            name="email"
                            id="emailExample"
                            placeholder="Write your email here"
                            onChange={(e) => {
                                this.setState({
                                    loginForm: {
                                        ...this.state.loginForm,
                                        email: e.target.value
                                    }
                                })
                            }}
                        />
                    </FormGroup>
                    <FormGroup style={{
                        width: "80%"
                    }}>
                        <Label for="passwordExample">Password:</Label>
                        <Input
                            type="password"
                            name="password"
                            id="passwordExample"
                            placeholder="Write your password here"
                            onChange={(e) => {
                                this.setState({
                                    loginForm: {
                                        ...this.state.loginForm,
                                        password: e.target.value
                                    }
                                })
                            }}
                        />
                    </FormGroup>

                    <div style={{
                        height: 50
                    }}>
                        {
                            this.state.isSubmitting
                                ? <Spinner color="primary"> </Spinner>
                                : <Button color="primary">Submit</Button>
                        }
                    </div>
                </Form>
            </div>
        );
    }
}

export default App;
