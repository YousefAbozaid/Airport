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

// Handle Support Form Submission
const supportForm = document.getElementById('support-form');
if (supportForm) {
    supportForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent page reload
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerText;
        
        // Show success state
        submitBtn.innerText = 'Message Sent! ✅';
        submitBtn.style.backgroundColor = '#4ade80'; // Match the on-time green
        submitBtn.style.color = '#0c1811';
        
        // Clear the form fields
        this.reset();
        
        // Revert button back to normal after 3 seconds
        setTimeout(() => {
            submitBtn.innerText = originalText;
            submitBtn.style.backgroundColor = '';
            submitBtn.style.color = '';
        }, 3000);
    });
}

// Book Ticket Form Logic
const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const from = document.getElementById("from").value;
        const to = document.getElementById("to").value;
        const date = document.getElementById("date").value;
        const passengers = document.getElementById("passengers").value;
        const flightClass = document.getElementById("class").value;

        const results = document.getElementById("results");

        const flights = [
            { id: "MS101", time: "08:00 AM", price: 120 },
            { id: "MS202", time: "01:30 PM", price: 180 },
            { id: "MS303", time: "09:45 PM", price: 150 }
        ];

        results.innerHTML = "<h3 style='color: var(--accent); margin-bottom: 15px; text-align: center;'>Available Flights</h3>";

        flights.forEach(flight => {
            results.innerHTML += `
                <div class="flight-result-card">
                    <div class="flight-info">
                        <strong>${flight.id}</strong>
                        <span>${from} ✈ ${to}</span>
                        <span>Date: ${date} | Time: ${flight.time}</span>
                        <span>Class: ${flightClass} | Passengers: ${passengers}</span>
                    </div>
                    <div class="book-action">
                        <div class="flight-price">$${flight.price * passengers}</div>
                        <button onclick="bookFlight('${flight.id}')">Book Now</button>
                    </div>
                </div>
            `;
        });
    });
}

function bookFlight(flightId) {
    alert("Flight " + flightId + " booked successfully ✈️");
}