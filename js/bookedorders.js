function loadAllOrdersData() {
    $.getJSON("database/allorders.json", function(data) {
        displayBookedOrders(data); 
    }).fail(function() {
        console.error('Failed to load JSON data');
    });
}

function displayBookedOrders(data) {
    var tableBody = $('#booked-orders-table');
    tableBody.empty(); 
    var bookedOrders = data.filter(function(order) {
        return order['Status'] === 'Booked';
    });

    $.each(bookedOrders, function(index, order) {
        var row = $('<tr>');
        row.append('<td>' + order['Order ID'] + '</td>');
        row.append('<td>' + order['Ordered Date'] + '</td>');
        row.append('<td>' + order['Product Name'] + '</td>');
        row.append('<td>' + order['Product Price'] + '</td>');
        var statusIcon = '<i class="far fa-calendar-check text-info"></i>';
        row.append('<td>' +  order['Status'] + '&nbsp;' + statusIcon + '</td>');
        tableBody.append(row);
    });
}

$(document).ready(function() {
    loadAllOrdersData(); 
});
