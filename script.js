function toggleProducts() {
    var productsList = document.getElementById("products-list");
    productsList.style.display = productsList.style.display === "block" ? "none" : "block";
}

function showModal(imageUrl) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modal-image");
    modal.style.display = "block";
    modalImg.src = imageUrl;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
