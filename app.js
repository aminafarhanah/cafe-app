// Simple SPA page switcher
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(sec => {
        sec.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}

// Show Home by default
window.onload = function() {
    showPage('home');

    // Handle order form submission
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.onsubmit = function(e) {
            e.preventDefault();
            const item = orderForm.item.value;
            const quantity = parseInt(orderForm.quantity.value, 10);
            let price = 0;
            switch(item) {
                case 'Cappuccino': price = 3; break;
                case 'Latte': price = 3.5; break;
                case 'Bagel': price = 2; break;
                case 'Blueberry Muffin': price = 2.5; break;
            }
            const total = (price * quantity).toFixed(2);
            document.getElementById('orderResult').textContent =
                `You ordered ${quantity} ${item}(s). Total: $${total}`;
            orderForm.reset();
        }
    }
}