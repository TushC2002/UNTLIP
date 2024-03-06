function loadAllOrdersData() {
    $.getJSON("database/allorders.json", function(data) {
        displayDeliveredOrders(data); 
    }).fail(function() {
        console.error('Failed to load JSON data');
    });
}

function displayDeliveredOrders(data) {
    var tableBody = $('#delivered-orders-table');
    tableBody.empty(); 
    var deliveredOrders = data.filter(function(order) {
        return order['Status'] === 'Delivered';
    });

    $.each(deliveredOrders, function(index, order) {
        var row = $('<tr>');
        row.append('<td>' + order['Order ID'] + '</td>');
        row.append('<td>' + order['Ordered Date'] + '</td>');
        row.append('<td>' + order['Product Name'] + '</td>');
        row.append('<td>' + order['Product Price'] + '</td>');
       
        var statusIcon = '<i class="far fa-check-circle text-success"></i>';
        row.append('<td>' +  order['Status'] + '&nbsp;' + statusIcon + '</td>');
        tableBody.append(row);
    });
}

$(document).ready(function() {
    loadAllOrdersData();
});
