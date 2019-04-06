import React, { Component } from "react";
import { Card, Button, Col, Form } from "react-bootstrap";
import axios from "axios";
export default class Login extends Component {
  state = {
    emailInput: "",
    passwordInput: ""
  };
  onChangeEmailInput = e => {
    this.setState({ emailInput: e.target.value });
  };

  onChangePasswordInput = e => {
    this.setState({
      passwordInput: e.target.value
    });
  };

  onSubmitLogin = () => {
    const { emailInput, passwordInput } = this.state;

    axios
      .post("http://localhost:3001/v1/token", {
        emailInput,
        passwordInput
      })
      .then(res => {
        console.log(res);
        if (res.data.code === 200) {
          localStorage.setItem("jwt", JSON.stringify(res.data.token));
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  onSubmitTest = () => {
    const token = JSON.parse(localStorage.getItem("jwt"));
    axios.defaults.headers.common["Authorization"] = `${token}`;
    console.log(token);
    let config = {
      headers: {
        authorization: `token ${token}`
      }
    };
    axios
      .get("http://localhost:3001/v1/test")
      .then(res => {
        console.log(res);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    const { emailInput, passwordInput } = this.state;
    const {
      onChangeEmailInput,
      onChangePasswordInput,
      onSubmitLogin,
      onSubmitTest
    } = this;
    return (
      <Col md={{ span: 8, offset: 2 }}>
        <Card>
          <Card.Header>로그인</Card.Header>
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
            <Button variant="primary" type="submit" onClick={onSubmitLogin}>
              제출
            </Button>
            <Button variant="primary" type="submit" onClick={onSubmitTest}>
              테스트
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
