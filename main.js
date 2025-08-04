document.addEventListener("DOMContentLoaded", function () {
  // 오늘 날짜와 현재 시간 표시
  const datetimeDisplay = document.getElementById("datetime-display");

  function updateDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    datetimeDisplay.textContent = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  updateDateTime(); // 페이지 로드 시 즉시 실행
  setInterval(updateDateTime, 1000); // 1초마다 시간 업데이트

  // 카테고리 클릭 시 메뉴 토글
  const dropdown = document.querySelector(".dropdown");
  const dropdownToggle = document.querySelector(".dropdown-toggle");

  dropdownToggle.addEventListener("click", () => {
    dropdown.classList.toggle("active");
  });

  // 페이지의 다른 곳을 클릭하면 드롭다운 메뉴 닫기
  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target) && event.target !== dropdownToggle) {
      dropdown.classList.remove("active");
    }
  });

  // 다크 모드 기능
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;

  // 로컬 스토리지에서 다크 모드 설정 확인(gpt의 도움을 받음)
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
  }

  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // 다크 모드 설정을 로컬 스토리지에 저장(gpt의 도움을 받음)
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.removeItem("darkMode");
    }
  });
});
