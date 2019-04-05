import React, { Component } from "react";
import { Card, Button, Form } from "react-bootstrap";
export default class SignIn extends Component {
  state = {
    emailInput: "",
    passwordInput: "",
    passwordConfirmInput: ""
  };

  onChangeEmailInput = e => {
    this.setState({ emailInput: e.value });
  };

  onChangePasswordInput = e => {
    this.setState({ passwordInput: e.value });
  };

  onChangePasswordConfirmInput = e => {
    this.setState({
      passwordConfirmInput: e.value
    });
  };

  render() {
    const { emailInput, passwordInput, passwordConfirmInput } = this.state;
    const {
      onChangeEmailInput,
      onChangePasswordInput,
      onChangePasswordConfirmInput
    } = this;
    return (
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
          <Button variant="primary" type="submit">
            제출
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
