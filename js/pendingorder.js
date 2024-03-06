function loadAllOrdersData() {
    $.getJSON("database/allorders.json", function(data) {
        displayPendingOrders(data); 
    }).fail(function() {
        console.error('Failed to load JSON data');
    });
}

function displayPendingOrders(data) {
    var tableBody = $('#pending-orders-table');
    tableBody.empty(); 
    var pendingOrders = data.filter(function(order) {
        return order['Status'] === 'Pending';
    });

    
    $.each(pendingOrders, function(index, order) {
        var row = $('<tr>');
        
        row.append('<td>' + order['Order ID'] + '</td>');
        row.append('<td>' + order['Ordered Date'] + '</td>');
        row.append('<td>' + order['Product Name'] + '</td>');
        row.append('<td>' + order['Product Price'] + '</td>');

        var statusIcon = '<i class="far fa-clock text-warning"></i>';
        row.append('<td>' +  order['Status'] + '&nbsp;' + statusIcon + '</td>');
        tableBody.append(row);
    });
}

$(document).ready(function() {
    loadAllOrdersData(); 
});
