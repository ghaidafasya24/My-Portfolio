document
  .getElementById("loginForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch(`${API_BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        showErrorPopup(data.error || "Login gagal");
        return;
      }

      showPopup();
    } catch (err) {
      showErrorPopup("Tidak bisa terhubung ke server");
      console.error(err);
    }
  });

function showPopup() {
  const popup = document.getElementById("popup");
  popup.classList.remove("hidden");
  popup.classList.add("flex");
}

function closePopup() {
  window.location.href = "./../admin/index.html";
}

function showErrorPopup(message) {
  const errorText = document.getElementById("errorText");
  const popup = document.getElementById("errorPopup");

  errorText.innerText = message;
  popup.classList.remove("hidden");
  popup.classList.add("flex");
}
