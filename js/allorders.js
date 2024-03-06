// $(document).ready(function() {
//     // Fetch data from the API
//     $.ajax({
//         url: 'https://crudcrud.com/api/401e7b414fd946bf90d80cdf40a5ffdf', 
//         type: 'GET',
//         success: function(data) {
//             // Generate table rows
//             var tableRows = '';
//             data.forEach(function(order) {
//                 tableRows += '<tr>';
//                 tableRows += '<td>' + order['Order ID'] + '</td>';
//                 tableRows += '<td>' + order['Ordered Date'] + '</td>';
//                 tableRows += '<td>' + order['Product Name'] + '</td>';
//                 tableRows += '<td>' + order['Product Price'] + '</td>';
//                 tableRows += '<td>';
//                 // Add status icon based on status value
//                 if (order['Status'] === 'Delivered') {
//                     tableRows += '<i class="far fa-check-circle"></i>';
//                 } else if (order['Status'] === 'Cancelled') {
//                     tableRows += '<i class="fa-regular fa-circle-xmark"></i>';
//                 } else if (order['Status'] === 'Pending') {
//                     tableRows += '<i class="fa-regular fa-clock"></i>';
//                 }
//                 tableRows += order['Status'];
//                 tableRows += '</td>';
//                 tableRows += '</tr>';
//             });
//             // Append table rows to the table body
//             $('#orders-table tbody').html(tableRows);
//         },
//         error: function() {
//             console.error('Failed to fetch data from the API');
//         }
//     });
// });

function loadAllOrdersData() {
    $.getJSON("database/allorders.json", function(data) {
        
        displayAllOrders(data); 
    }).fail(function() {
        console.error('Failed to load JSON data');
    });
}
function displayAllOrders(data) {
    var tableBody = $('#all-orders-table');
    tableBody.empty(); 

    
    $.each(data, function(index, order) {
        var row = $('<tr>');
        row.append('<td>' + order['Order ID'] + '</td>');
        row.append('<td>' + order['Ordered Date'] + '</td>');
        row.append('<td>' + order['Product Name'] + '</td>');
        row.append('<td>' + order['Product Price'] + '</td>');
        
        var statusIcon = '';
        if (order['Status'] === 'Delivered') {
            statusIcon = '<i class="far fa-check-circle text-success"></i>';
        } else if (order['Status'] === 'Cancelled') {
            statusIcon = '<i class="fa-regular fa-circle-xmark text-danger"></i>';
        } else if (order['Status'] === 'Pending') {
            statusIcon = '<i class="far fa-clock text-warning"></i>';
        }
        else if (order['Status'] === 'Booked') {
            statusIcon = '<i class="far fa-calendar-check text-info"></i>';
        }
        row.append('<td>' +  order['Status'] + '&nbsp;' + statusIcon + '</td>');
        tableBody.append(row);
    });
}


$(document).ready(function() {
    loadAllOrdersData(); 
});

