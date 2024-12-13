function chartdisplay(adminCount, buyerCount, sellerCount) {
    // code here
    var ctx = document.getElementById('userCategoryChart').getContext('2d');
    var userCategoryChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Admin', 'Buyer', 'Seller'],
            datasets: [{
                label: 'Count',
                data: [adminCount, buyerCount, sellerCount], // Use the attributes here
                backgroundColor: ['#FF5733', '#33FF57', '#3357FF'],
                hoverOffset: 4
            }]
        },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                    position: 'top',
                    }
                }
            }
    });
}