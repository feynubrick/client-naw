import React from "react";
import Swal from "sweetalert2";
const LoginButton = () => {
  const modalHTML = `
    <label>아이디</label>
    <input id="swal-input1" class="swal2-input">
    <label>비밀번호</label>
    <input 
      maxlength="10"
      id="swal-input2"
      autocapitalize="off"
      autocorrect="off"
      class="swal2-input"
      placeholder="비밀번호를 입력해 주세요"
      type="password"
    >
    <button type="button" class="btn btn-outline-info">회원가입</button>
  `;
  const signUpModal = () =>
    Swal.mixin({
      input: "text",
      confirmButtonText: "Next &rarr;",
      showCancelButton: true,
      progressSteps: ["1", "2", "3"]
    })
      .queue([
        {
          title: "Question 1",
          text: "Chaining swal2 modals is easy"
        },
        "Question 2",
        "Question 3"
      ])
      .then(result => {
        if (result.value) {
          Swal.fire({
            title: "All done!",
            html:
              "Your answers: <pre><code>" +
              JSON.stringify(result.value) +
              "</code></pre>",
            confirmButtonText: "Lovely!"
          });
        }
      });

  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={async () => {
        const { value: formValues } = await Swal.fire({
          title: "로그인",
          html: modalHTML,
          focusConfirm: false,
          preConfirm: () => {
            return [
              document.getElementById("swal-input1").value,
              document.getElementById("swal-input2").value
            ];
          }
        });

        if (formValues) {
          Swal.fire(JSON.stringify(formValues));
        }
      }}
    >
      <i className="fas fa-user"> 로그인</i>
    </div>
  );
};

export default LoginButton;
