// ==================== 1. TÌM KIẾM SÁCH ====================

// Lấy các phần tử cần dùng từ HTML.
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const bookCards = document.querySelectorAll(".book-card");
const noResults = document.getElementById("noResults");

// Chạy đoạn này khi người dùng bấm Tìm kiếm hoặc nhấn Enter.
searchForm.addEventListener("submit", function (event) {
    // Không cho trình duyệt tải lại trang.
    event.preventDefault();

    // Lấy từ khóa và chuyển thành chữ thường.
    const keyword = searchInput.value.toLowerCase().trim();
    let foundBook = false;

    // Duyệt qua từng thẻ sách.
    bookCards.forEach(function (book) {
        const name = book.dataset.name.toLowerCase();
        const author = book.dataset.author.toLowerCase();
        const category = book.dataset.category.toLowerCase();

        // Nếu từ khóa xuất hiện trong tên, tác giả hoặc danh mục thì hiện sách.
        if (name.includes(keyword) || author.includes(keyword) || category.includes(keyword)) {
            book.style.display = "block";
            foundBook = true;
        } else {
            book.style.display = "none";
        }
    });

    // Hiện thông báo khi không tìm thấy sách.
    if (foundBook) {
        noResults.style.display = "none";
    } else {
        noResults.style.display = "block";
    }
});

// ==================== 2. THÊM SÁCH VÀO GIỎ ====================

// Số lượng sản phẩm trong giỏ hàng ban đầu bằng 0.
let cartCount = 0;
const cartCountText = document.getElementById("cartCount");
const addCartButtons = document.querySelectorAll(".add-to-cart");

// Gắn sự kiện cho tất cả nút Thêm vào giỏ.
addCartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        cartCount = cartCount + 1;
        cartCountText.textContent = cartCount;
        alert("Đã thêm sách vào giỏ hàng!");
    });
});

// Khi bấm Giỏ hàng, hiện số sản phẩm đã thêm.
const cartButton = document.getElementById("cartButton");
cartButton.addEventListener("click", function () {
    alert("Bạn đã thêm " + cartCount + " sản phẩm vào giỏ hàng.");
});

// ==================== 3. NÚT ĐĂNG NHẬP ====================

// Đây là nút minh họa. Sau này có thể liên kết với trang đăng nhập.
const loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", function () {
    alert("Chức năng đăng nhập sẽ được xây dựng ở bước tiếp theo.");
});
