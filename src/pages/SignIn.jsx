import React, { Component } from "react";
import { Card, Button, Form, Col } from "react-bootstrap";
import axios from "axios";
export default class SignIn extends Component {
  state = {
    emailInput: "",
    passwordInput: "",
    passwordConfirmInput: ""
  };

  onChangeEmailInput = e => {
    this.setState({ emailInput: e.target.value });
  };

  onChangePasswordInput = e => {
    this.setState({ passwordInput: e.target.value });
  };

  onChangePasswordConfirmInput = e => {
    this.setState({
      passwordConfirmInput: e.target.value
    });
  };

  onSubmitSignIn = () => {
    const { emailInput, passwordInput } = this.state;

    axios
      .post("http://localhost:3001/users/signin", {
        emailInput,
        passwordInput
      })
      .then(res => {
        if (res.data.result === "Success") {
          this.props.history.push("/login");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    const { emailInput, passwordInput, passwordConfirmInput } = this.state;
    const {
      onChangeEmailInput,
      onChangePasswordInput,
      onChangePasswordConfirmInput,
      onSubmitSignIn
    } = this;
    return (
      <Col md={{ span: 8, offset: 2 }}>
        <Card>
          <Card.Header>회원 가입</Card.Header>
          <Card.Body>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>이메일 주소</Form.Label>
              <Form.Control
                value={emailInput}
                onChange={onChangeEmailInput}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control
                value={passwordInput}
                onChange={onChangePasswordInput}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>비밀 번호 확인</Form.Label>
              <Form.Control
                value={passwordConfirmInput}
                onChange={onChangePasswordConfirmInput}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={onSubmitSignIn}>
              제출
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
