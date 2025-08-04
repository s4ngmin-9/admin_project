// 다크모드 관련(gpt의 도움을 받음)
document.addEventListener("DOMContentLoaded", () => {
  const darkModeSwitch = document.getElementById("dark-mode-switch");
  const htmlElement = document.documentElement;

  const savedTheme = localStorage.getItem("theme") || "light";
  htmlElement.setAttribute("data-bs-theme", savedTheme);
  if (darkModeSwitch) {
    darkModeSwitch.checked = savedTheme === "dark";
  }

  if (darkModeSwitch) {
    darkModeSwitch.addEventListener("change", () => {
      const theme = darkModeSwitch.checked ? "dark" : "light";
      htmlElement.setAttribute("data-bs-theme", theme);
      localStorage.setItem("theme", theme);
    });
  }

  // 회원가입 폼 유효성 검사
  const form = document.getElementById("signup-form");
  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");
  const genderInput = document.getElementById("gender");
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");

  // 폼 요소들이 모두 존재하는지 확인하는 조건문 추가
  if (
    form &&
    usernameInput &&
    emailInput &&
    passwordInput &&
    confirmPasswordInput
  ) {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // 폼 기본 제출 동작 방지

      // 모든 유효성 검사를 통과했는지 확인하는 플래그
      let isFormValid = true;

      // 각 필드 유효성 검사 실행
      if (!validateUsername()) isFormValid = false;
      if (!validateEmail()) isFormValid = false;
      if (!validatePassword()) isFormValid = false;
      if (!validateConfirmPassword()) isFormValid = false;

      // 모든 필드가 유효하면 회원가입 처리
      if (isFormValid) {
        // 1. 회원가입 내용으로 알림창 생성
        const userInfo = `
          🎉 회원가입이 완료되었습니다! 🎉
          ------------------------------
          아이디: ${usernameInput.value}
          이름: ${nameInput.value}
          전화번호: ${phoneInput.value}
          성별: ${genderInput.options[genderInput.selectedIndex].text}
          이메일: ${emailInput.value}
          ------------------------------
          확인을 누르면 환영 페이지로 이동합니다.
          `;
        alert(userInfo);
        window.location.href = "welcome.html";
      }
    });

    // 실시간 유효성 검사를 위한 이벤트 리스너 추가(gpt의 도움을 받음)
    usernameInput.addEventListener("input", validateUsername);
    emailInput.addEventListener("input", validateEmail);
    passwordInput.addEventListener("input", validatePassword);
    confirmPasswordInput.addEventListener("input", validateConfirmPassword);
  } else {
    console.error(
      "회원가입 폼의 일부 요소가 HTML에 존재하지 않습니다. 스크립트 실행을 중단합니다."
    );
    return;
  }

  // 유효성 검사

  function setValidationState(input, isValid) {
    if (isValid) {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
    }
    return isValid;
  }

  function validateUsername() {
    const regex = /^[a-z0-9]{5,20}$/;
    const isValid = regex.test(usernameInput.value);
    return setValidationState(usernameInput, isValid);
  }

  function validateEmail() {
    // 표준 이메일 형식 검사(gpt의 도움을 받음)
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(emailInput.value);
    return setValidationState(emailInput, isValid);
  }

  function validatePassword() {
    // 8자 이상, 영문 대/소문자, 숫자, 특수문자 포함(gpt의 도움을 받음)
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValid = regex.test(passwordInput.value);
    return setValidationState(passwordInput, isValid);
  }

  function validateConfirmPassword() {
    const isValid =
      passwordInput.value === confirmPasswordInput.value &&
      confirmPasswordInput.value !== "";
    return setValidationState(confirmPasswordInput, isValid);
  }
});
