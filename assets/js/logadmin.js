// Kiểm tra trạng thái đăng nhập khi tải trang đăng nhập
if (window.location.pathname.endsWith("index.html") && sessionStorage.getItem("loggedIn") === "true") {
    window.location.href = "./adfunc.html"; // Chuyển hướng tới trang admin nếu đã đăng nhập
}

// Xử lý sự kiện khi submit form đăng nhập
document.getElementById("loginForm")?.addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form

    // Tài khoản và mật khẩu đúng
    const validUsername = "admin";
    const validPassword = "admin123";

    // Lấy giá trị nhập vào từ form
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    // Kiểm tra thông tin đăng nhập
    if (username === validUsername && password === validPassword) {
        // Lưu trạng thái đăng nhập
        sessionStorage.setItem("loggedIn", "true");
        // Chuyển hướng tới trang admin
        window.location.href = "./adfunc.html";
    } else {
        // Xóa mật khẩu để người dùng nhập lại
        document.getElementById("loginPassword").value = "";
        alert("Tên đăng nhập hoặc mật khẩu không chính xác!");
    }
});

// Kiểm tra quyền truy cập khi vào trang admin
if (window.location.pathname.endsWith("adfunc.html")) {
    if (sessionStorage.getItem("loggedIn") !== "true") {
        alert("Bạn cần đăng nhập để truy cập!");
        window.location.href = "./index.html"; // Quay lại trang đăng nhập nếu chưa đăng nhập
    }
}

// Xử lý sự kiện đăng xuất trên trang admin
document.getElementById("logoutButton")?.addEventListener("click", function () {
    // Xóa trạng thái đăng nhập
    sessionStorage.removeItem("loggedIn");
    // Chuyển hướng về trang đăng nhập
    window.location.href = "./index.html";
});

// Đảm bảo nội dung được điều chỉnh chiều cao phù hợp
function adjustAdminHeight() {
    const admin = document.querySelector(".adminn");
    const container = document.querySelector(".container");
    if (admin && container) {
        admin.style.height = `${container.scrollHeight}px`;
    }
}
document.addEventListener("DOMContentLoaded", adjustAdminHeight);
window.addEventListener("resize", adjustAdminHeight);
