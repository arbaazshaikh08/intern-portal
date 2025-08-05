document.addEventListener("DOMContentLoaded", () => {
  const internList = document.getElementById("internList");

  fetch("https://intern-portal-7tdk.onrender.com/api/intern")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      internList.innerHTML = "";
      data.forEach((intern) => {
        const listItem = document.createElement("li");
        listItem.textContent = `👤 ${intern.name} (${intern.email}) - ${intern.bio || "No bio"}`;
        internList.appendChild(listItem);
      });
    })
    .catch((err) => {
      console.error("Error fetching intern data:", err);
      internList.textContent = "Failed to load intern data.";
    });
});
