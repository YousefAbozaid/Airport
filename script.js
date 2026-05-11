// ========================================================================== // Section separator for visual organization
// Person 1: Navigation & Home Section                                        // Label indicating the section owner and purpose
// ========================================================================== // Section separator for visual organization
document.getElementById('welcome-search-form')?.addEventListener('submit', e => { // Add submit event listener to the search form if it exists
    e.preventDefault(); // Prevent the default form submission behavior (page reload)
    e.target.querySelector('button').innerText = 'Searching Flights... ✈️'; // Change the submit button text to indicate loading state
    setTimeout(() => document.getElementById('book').scrollIntoView({ behavior: 'smooth' }), 800); // Smooth scroll to the 'book' section after an 800ms delay
}); // End of the event listener callback function

// ========================================================================== // Section separator for visual organization
// Person 2: Flight Schedule Section                                          // Label indicating the section owner and purpose
// ========================================================================== // Section separator for visual organization
// Filter flights in Dashboard                                                // Comment describing the function below
function filterFlights(status) {                                              // Define a function to filter flights based on their status
    // Highlight active button                                                // Comment explaining the next block of code
    document.querySelectorAll('.filter-button').forEach(btn => {              // Select all filter buttons and iterate over them
        btn.classList.toggle('active', btn.innerText === (status === 'all' ? 'All' : status)); // Toggle the 'active' class if the button's text matches the chosen status
    });                                                                       // End of the button iteration

    // Show/Hide rows                                                         // Comment explaining the next block of code
    document.querySelectorAll('#flight-table-body tr').forEach(row => {       // Select all rows in the flight table body and iterate over them
        const rowStatus = row.getAttribute('data-status');                    // Get the 'data-status' attribute value for the current row
        row.style.display = (status === 'all' || rowStatus === status) ? '' : 'none'; // Set the display style to empty (show) or 'none' (hide) based on the status match
    });                                                                       // End of the row iteration
}                                                                             // End of the filterFlights function

// ========================================================================== // Section separator for visual organization
// Person 3: Book Ticket Section                                              // Label indicating the section owner and purpose
// ========================================================================== // Section separator for visual organization
const bookList = document.querySelector('.book-list');                        // Select the element with the class 'book-list' and store it in a variable
if (bookList) {                                                               // Check if the bookList element exists in the DOM
    const listItems = bookList.querySelectorAll('li');                        // Select all list items (li) within the bookList
    console.log(`Book Ticket initialized with ${listItems.length} items.`);   // Log an initialization message with the count of list items to the console
}                                                                             // End of the if condition

// ========================================================================== // Section separator for visual organization
// Person 4: Traveler Dashboard Section                                       // Label indicating the section owner and purpose
// ========================================================================== // Section separator for visual organization
const dashboardList = document.querySelector('.dashboard-list');              // Select the element with the class 'dashboard-list' and store it in a variable
if (dashboardList) {                                                          // Check if the dashboardList element exists in the DOM
    const listItems = dashboardList.querySelectorAll('li');                   // Select all list items (li) within the dashboardList
    console.log(`Dashboard initialized with ${listItems.length} items.`);     // Log an initialization message with the count of list items to the console
}                                                                             // End of the if condition

// ========================================================================== // Section separator for visual organization
// Person 5: Baggage Services Section                                         // Label indicating the section owner and purpose
// ========================================================================== // Section separator for visual organization
// Filter baggage by search                                                   // Comment describing the function below
function filterBaggage() {                                                    // Define a function to filter the baggage list based on search input
    const query = document.getElementById('baggage-search-input').value.toLowerCase(); // Get the search input value and convert it to lowercase for case-insensitive matching
    document.querySelectorAll('#baggage-table-body tr').forEach(row => {      // Select all rows in the baggage table body and iterate over them
        row.style.display = row.innerText.toLowerCase().includes(query) ? '' : 'none'; // Show the row if its text contains the query, otherwise hide it
    });                                                                       // End of the row iteration
}                                                                             // End of the filterBaggage function

// ========================================================================== // Section separator for visual organization
// Person 6: Airport Facilities Section                                       // Label indicating the section owner and purpose
// ========================================================================== // Section separator for visual organization
const facilitiesList = document.querySelector('.facilities-list');            // Select the element with the class 'facilities-list' and store it in a variable
if (facilitiesList) {                                                         // Check if the facilitiesList element exists in the DOM
    const listItems = facilitiesList.querySelectorAll('li');                  // Select all list items (li) within the facilitiesList
    console.log(`Facilities initialized with ${listItems.length} items.`);    // Log an initialization message with the count of list items to the console
}                                                                             // End of the if condition

// ========================================================================== // Section separator for visual organization
// Person 7: Support Center Section                                           // Label indicating the section owner and purpose
// ========================================================================== // Section separator for visual organization
// Handle Support Form Submission                                             // Comment describing the block below
const supportForm = document.getElementById('support-form');                  // Select the element with the ID 'support-form' and store it in a variable
if (supportForm) {                                                            // Check if the supportForm element exists in the DOM
    supportForm.addEventListener('submit', function(e) {                      // Add a submit event listener to the support form
        e.preventDefault(); // Prevent page reload                            // Prevent the default form submission behavior (page reload)
        
        const submitBtn = this.querySelector('button[type="submit"]');        // Find the submit button inside the form
        const originalText = submitBtn.innerText;                             // Store the original text of the submit button
        
        // Show success state                                                 // Comment indicating state change logic
        submitBtn.innerText = 'Message Sent! ✅';                              // Change the button text to show a success message
        submitBtn.style.backgroundColor = '#4ade80'; // Match the on-time green // Change the button's background color to green
        submitBtn.style.color = '#0c1811';                                    // Change the button's text color for better contrast
        
        // Clear the form fields                                              // Comment indicating form reset logic
        this.reset();                                                         // Reset all fields in the form to their default values
        
        // Revert button back to normal after 3 seconds                       // Comment indicating timeout logic
        setTimeout(() => {                                                    // Set a timeout to revert the button state
            submitBtn.innerText = originalText;                               // Restore the button's original text
            submitBtn.style.backgroundColor = '';                             // Remove the custom background color, reverting to CSS styles
            submitBtn.style.color = '';                                       // Remove the custom text color, reverting to CSS styles
        }, 3000);                                                             // The timeout duration is 3000 milliseconds (3 seconds)
    });                                                                       // End of the event listener callback
}                                                                             // End of the if condition
