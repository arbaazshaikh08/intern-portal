document.addEventListener("DOMContentLoaded", () => {
  const nameSpan = document.getElementById("intern-name");
  const referralCodeSpan = document.getElementById("referral-code");
  const donationAmountSpan = document.getElementById("donation-amount");

  // ✅ Correct backend endpoint
  fetch("https://intern-portal-7tdk.onrender.com/api/intern")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      // 🔁 If the API returns an array of interns, show the first one
      const intern = data[0]; // or loop through data if multiple interns

      if (intern) {
        nameSpan.textContent = intern.name || "N/A";
        referralCodeSpan.textContent = intern.referralCode || "N/A";
        donationAmountSpan.textContent = intern.totalDonations || "0";
      } else {
        nameSpan.textContent = "No data found";
        referralCodeSpan.textContent = "-";
        donationAmountSpan.textContent = "0";
      }
    })
    .catch((err) => {
      console.error("Error fetching intern data:", err);
      nameSpan.textContent = "Error";
      referralCodeSpan.textContent = "Error";
      donationAmountSpan.textContent = "Error";
    });
});
