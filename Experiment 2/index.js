window.onload = function () {

    Swal.fire({
        title: "🛒 Welcome",
        text: "Welcome to Billing Management System",
        icon: "success",
        confirmButtonText: "Start Billing",
        confirmButtonColor: "#007bff"
    });

};
function generateBill() {

    const customer = document.getElementById("customer").value;
    const product = document.getElementById("product").value;
    const price = Number(document.getElementById("price").value);
    const quantity = Number(document.getElementById("quantity").value);
    const coupon = document.getElementById("coupon").value.trim().toUpperCase();

    const subtotal = price * quantity;

    let discount = 0;

    if (coupon === "SIT20") {
        discount = subtotal * 20 / 100;
        alert("🎉 Congratulations! SIT20 Applied. You got 20% Discount.");
    }

    const amountAfterDiscount = subtotal - discount;
    const gst = amountAfterDiscount * 18 / 100;
    const total = amountAfterDiscount + gst;

    document.getElementById("bill").style.display = "block";

    document.getElementById("cname").textContent = customer;
    document.getElementById("pname").textContent = product;
    document.getElementById("pprice").textContent = "₹" + price.toFixed(2);
    document.getElementById("qty").textContent = quantity;
    document.getElementById("subtotal").textContent = "₹" + subtotal.toFixed(2);
    document.getElementById("gst").textContent = "₹" + gst.toFixed(2);
    document.getElementById("total").textContent = "₹" + total.toFixed(2);

    //(optional)
    document.getElementById("discount").textContent = "₹" + discount.toFixed(2);
}