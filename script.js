// Simple number counter for Dashboard
function startCounters() {
    const counters = document.querySelectorAll('.statistic-number');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const suffix = counter.getAttribute('data-suffix') || '';
        let count = 0;
        const step = Math.ceil(target / 50); // Speed of count
        
        const updateCount = setInterval(() => {
            count += step;
            if (count >= target) {
                count = target;
                clearInterval(updateCount);
            }
            counter.innerText = count + suffix;
        }, 30);
    });
}

// Filter flights in Dashboard
function filterFlights(status) {
    // Highlight active button
    document.querySelectorAll('.filter-button').forEach(btn => {
        btn.classList.toggle('active', btn.innerText === (status === 'all' ? 'All' : status));
    });

    // Show/Hide rows
    document.querySelectorAll('#flight-table-body tr').forEach(row => {
        const rowStatus = row.getAttribute('data-status');
        row.style.display = (status === 'all' || rowStatus === status) ? '' : 'none';
    });
}

// Filter baggage by search
function filterBaggage() {
    const query = document.getElementById('baggage-search-input').value.toLowerCase();
    document.querySelectorAll('#baggage-table-body tr').forEach(row => {
        row.style.display = row.innerText.toLowerCase().includes(query) ? '' : 'none';
    });
}

// Start counters when scrolling to Dashboard
window.addEventListener('scroll', () => {
    const dashboard = document.getElementById('dashboard');
    if (dashboard && !dashboard.dataset.counted) {
        const rect = dashboard.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            dashboard.dataset.counted = 'true';
            startCounters();
        }
    }
});