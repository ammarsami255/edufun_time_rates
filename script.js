function submitForm() {
    var selectedProduct = document.getElementById('product').value;
    var quantityInput = document.getElementById('quantity');
    var quantity = parseInt(quantityInput.value, 10);

    if (isNaN(quantity) || quantity <= 0) {
        openModal('Please enter a valid positive integer for quantity.');
        quantityInput.value = '';
        return;
    }

    var timeRate;

    switch (selectedProduct) {
        case 'deluxe-chair':
            timeRate = ((((5336.582353/ 60) / 60) / 8) / 26) * quantity;
            break;
        case 'simple-chair':
            timeRate = ((((2340/ 60) / 60) / 8) / 26) * quantity;
            break;
        case 'dynamic-chair':
            break;
        case 'dynamic-table':
            timeRate = ((((8462.8/ 60) / 60) / 8) / 26) * quantity;
            break;
            case 'cantiliver':
            timeRate = ((((6300/ 60) / 60) / 8) / 26) * quantity;
            break;
        default:
            openModal('Invalid product selection.');
            return;
    }
    openModal('Product: ' + selectedProduct + '<br>Quantity: ' + quantity + '<br>Time Rate: ' + timeRate.toFixed(2) + ' days ');
}

function openModal(message) {
    document.getElementById('myModal').style.display = 'block';

    document.getElementById('modalMessage').innerHTML = message;
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}
