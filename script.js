// ==========================================================================
// Person 1: Navigation & Home Section
// ==========================================================================
const welcomeForm = document.getElementById('welcome-search-form');
if (welcomeForm) {
    welcomeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = this.querySelector('.search-button');
        const originalText = btn.innerText;
        btn.innerText = 'Searching Flights... ✈️';
        setTimeout(() => {
            btn.innerText = originalText;
            document.getElementById('book').scrollIntoView({ behavior: 'smooth' });
        }, 800);
    });
}

// ==========================================================================
// Person 2: Flight Schedule Section
// ==========================================================================
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

// ==========================================================================
// Person 3: Book Ticket Section
// ==========================================================================
const bookList = document.querySelector('.book-list');
if (bookList) {
    const listItems = bookList.querySelectorAll('li');
    console.log(`Book Ticket initialized with ${listItems.length} items.`);
}

// ==========================================================================
// Person 4: Traveler Dashboard Section
// ==========================================================================
const dashboardList = document.querySelector('.dashboard-list');
if (dashboardList) {
    const listItems = dashboardList.querySelectorAll('li');
    console.log(`Dashboard initialized with ${listItems.length} items.`);
}

// ==========================================================================
// Person 5: Baggage Services Section
// ==========================================================================
// Filter baggage by search
function filterBaggage() {
    const query = document.getElementById('baggage-search-input').value.toLowerCase();
    document.querySelectorAll('#baggage-table-body tr').forEach(row => {
        row.style.display = row.innerText.toLowerCase().includes(query) ? '' : 'none';
    });
}

// ==========================================================================
// Person 6: Airport Facilities Section
// ==========================================================================
const facilitiesList = document.querySelector('.facilities-list');
if (facilitiesList) {
    const listItems = facilitiesList.querySelectorAll('li');
    console.log(`Facilities initialized with ${listItems.length} items.`);
}

// ==========================================================================
// Person 7: Support Center Section
// ==========================================================================
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
