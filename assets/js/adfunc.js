$(document).ready(function () {
  // Existing tab switching logic
  $("#adminTab a").on("click", function (e) {
    e.preventDefault();
    $(this).tab("show");
  });

  // Logout functionality
  $("#logoutButton").on("click", function () {
    // Clear session data when logging out
    sessionStorage.removeItem("loggedIn"); // Remove the logged-in status

    // Optionally, you can also redirect to the login page after logout
    window.location.href = "./index.html"; // Replace with the correct login page URL
  });
});
function searchTable(inputId, tableId) {
  const input = document.getElementById(inputId).value.toLowerCase();
  const table = document.getElementById(tableId);
  const rows = table.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) {
    // Bỏ qua hàng tiêu đề
    let cells = rows[i].getElementsByTagName("td");
    let match = false;
    for (let cell of cells) {
      if (cell.innerHTML.toLowerCase().indexOf(input) > -1) {
        match = true;
        break;
      }
    }
    rows[i].style.display = match ? "" : "none";
  }
}
window.searchTable = searchTable;