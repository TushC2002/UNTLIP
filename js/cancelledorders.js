function loadAllOrdersData() {
    $.getJSON("database/allorders.json", function(data) {
        displayCancelledOrders(data); 
    }).fail(function() {
        console.error('Failed to load JSON data');
    });
}

function displayCancelledOrders(data) {
    var tableBody = $('#cancelled-orders-table');
    tableBody.empty(); 
    var cancelledOrders = data.filter(function(order) {
        return order['Status'] === 'Cancelled';
    });

    
    $.each(cancelledOrders, function(index, order) {
        var row = $('<tr>');
        row.append('<td>' + order['Order ID'] + '</td>');
        row.append('<td>' + order['Ordered Date'] + '</td>');
        row.append('<td>' + order['Product Name'] + '</td>');
        row.append('<td>' + order['Product Price'] + '</td>');
        
        var statusIcon = '<i class="fa-regular fa-circle-xmark text-danger"></i>';
        row.append('<td>' +  order['Status'] + '&nbsp;' + statusIcon + '</td>');
        tableBody.append(row);
    });
}

$(document).ready(function() {
    loadAllOrdersData(); 
});
