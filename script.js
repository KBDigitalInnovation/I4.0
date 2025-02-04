document.addEventListener('DOMContentLoaded', function() {
    // Dados de exemplo
    const productionData = [100, 200, 150, 300, 250];
    const maintenanceData = [5, 10, 7, 12, 8];
    const qualityData = [90, 85, 88, 92, 87];
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

    // Gráfico de Produção
    const productionCtx = document.getElementById('productionChart').getContext('2d');
    new Chart(productionCtx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Produção',
                data: productionData,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true
            }]
        }
    });

    // Gráfico de Manutenção
    const maintenanceCtx = document.getElementById('maintenanceChart').getContext('2d');
    new Chart(maintenanceCtx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Manutenção',
                data: maintenanceData,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        }
    });

    // Gráfico de Qualidade
    const qualityCtx = document.getElementById('qualityChart').getContext('2d');
    new Chart(qualityCtx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Qualidade',
                data: qualityData,
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        }
    });
});