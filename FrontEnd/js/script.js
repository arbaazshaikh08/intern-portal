if (
  window.location.pathname.includes("index.html") ||
  window.location.pathname === "/"
) {
  document
    .getElementById("login-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("email").value;

      if (email) {
        localStorage.setItem("internEmail", email);

        window.location.href = "dashboard.html";
      }
    });
}

if (window.location.pathname.includes("dashboard.html")) {
  fetch("https://intern-portal-7tdk.onrender.com")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("intern-name").textContent = data.name;
      document.getElementById("referral-code").textContent = data.referralCode;
      document.getElementById("donation-amount").textContent =
        data.totalDonations;
    })
    .catch((err) => console.error("Error fetching intern data:", err));
}
