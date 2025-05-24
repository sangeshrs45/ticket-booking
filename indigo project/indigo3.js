// Flight data
const flights = [
    {
      number: '6E101',
      date: '2025-05-02',
      name: 'IndiGo Express',
      takeoff: '08:00 AM',
      landing: '10:15 AM',
      from: 'Chennai',
      to: 'Delhi',
      amount: '4,500'
    },
    {
      number: '6E202',
      date: '2025-05-02',
      name: 'IndiGo Prime',
      takeoff: '10:30 AM',
      landing: '12:45 PM',
      from: 'Goa',
      to: 'Mumbai',
      amount: '3,800'
    },
    {
      number: '6E303',
      date: '2025-05-02',
      name: 'IndiGo Swift',
      takeoff: '01:00 PM',
      landing: '03:10 PM',
      from: 'Kolkata',
      to: 'Hyderabad',
      amount: '5,000'
    },
    {
      number: '6E404',
      date: '2025-05-02',
      name: 'IndiGo Sky',
      takeoff: '03:15 PM',
      landing: '05:00 PM',
      from: 'Mumbai',
      to: 'Bangalore',
      amount: '4,200'
    },
    {
      number: '6E505',
      date: '2025-05-02',
      name: 'IndiGo Connect',
      takeoff: '05:45 PM',
      landing: '08:00 PM',
      from: 'Delhi',
      to: 'Chennai',
      amount: '5,500'
    },
    {
      number: '6E606',
      date: '2025-05-02',
      name: 'IndiGo Lite',
      takeoff: '07:00 PM',
      landing: '09:20 PM',
      from: 'Hyderabad',
      to: 'Kolkata',
      amount: '4,900'
    },
    {
      number: '6E707',
      date: '2025-05-02',
      name: 'IndiGo Jet',
      takeoff: '09:00 PM',
      landing: '11:30 PM',
      from: 'Bangalore',
      to: 'Delhi',
      amount: '5,300'
    },
    {
      number: '6E808',
      date: '2025-05-02',
      name: 'IndiGo Cruiser',
      takeoff: '11:30 PM',
      landing: '01:40 AM',
      from: 'Chennai',
      to: 'Goa',
      amount: '3,700'
    },
    {
      number: '6E909',
      date: '2025-05-02',
      name: 'IndiGo Wings',
      takeoff: '06:00 AM',
      landing: '08:15 AM',
      from: 'Mumbai',
      to: 'Kolkata',
      amount: '4,800'
    },
    {
      number: '6E010',
      date: '2025-05-02',
      name: 'IndiGo Dash',
      takeoff: '12:00 PM',
      landing: '02:30 PM',
      from: 'Delhi',
      to: 'Hyderabad',
      amount: '5,100'
    }
  ];
  
  document.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('travelDate').value = today;
    
    // Populate flight status table
    const flightTableBody = document.getElementById('flightTableBody');
    flights.forEach(flight => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${flight.number}</td>
        <td>${flight.date}</td>
        <td>${flight.name}</td>
        <td>${flight.takeoff}</td>
        <td>${flight.landing}</td>
        <td>${flight.from}</td>
        <td>${flight.to}</td>
        <td>₹${flight.amount}</td>
      `;
      flightTableBody.appendChild(row);
    });
  
    // Dropdown functionality
    document.querySelectorAll(".dropdown-item").forEach(item => {
      item.addEventListener("click", function(e) {
        e.preventDefault();
        const parent = this.closest('.input-group');
        const input = parent.querySelector("input");
        input.value = this.textContent;
      });
    });
  });
  
  // Navigation functions
  function showHome() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('book').style.display = 'none';
    document.getElementById('flight_status').style.display = 'none';
    document.getElementById('ticket').style.display = 'none';
  }
  
  function showBooking() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('book').style.display = 'block';
    document.getElementById('flight_status').style.display = 'none';
    document.getElementById('ticket').style.display = 'none';
  }
  
  function showFlightStatus() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('book').style.display = 'none';
    document.getElementById('flight_status').style.display = 'block';
    document.getElementById('ticket').style.display = 'none';
  }
  
  // Payment and booking functions
  let paymentCompleted = false;
  
  function validateBooking() {
    const requiredFields = [
      'frombox', 'tobox', 'passengerName', 'passengerAge', 
      'passengerGender', 'passengerMobilenumber', 'passengerEmail', 'travelDate'
    ];
    
    let isValid = true;
    
    requiredFields.forEach(fieldId => {
      const field = document.getElementById(fieldId);
      if (!field.value) {
        field.classList.add('is-invalid');
        isValid = false;
      } else {
        field.classList.remove('is-invalid');
      }
    });
  
    if (!isValid) {
      alert('Please fill in all required fields!');
      return;
    }
  
    document.getElementById('paymentSection').scrollIntoView({ behavior: 'smooth' });
  }
  
  function processPayment() {
    const amount = document.getElementById('paymentAmount').value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
  
    if (!amount) {
      alert('Please enter payment amount!');
      return;
    }
  
    if (!paymentMethod) {
      alert('Please select payment method!');
      return;
    }
  
    // Show processing
    document.getElementById('paymentProcessing').style.display = 'block';
    
    // Simulate payment processing
    setTimeout(() => {
      paymentCompleted = true;
      document.getElementById('paymentProcessing').style.display = 'none';
      generateTicket();
      alert('Payment successful! Your ticket has been generated.');
    }, 2000);
  }
  
  function generateTicket() {
    const from = document.getElementById('frombox').value;
    const to = document.getElementById('tobox').value;
    
    // Find matching flight
    const matchingFlight = flights.find(f => 
      f.from.toLowerCase() === from.toLowerCase() && 
      f.to.toLowerCase() === to.toLowerCase()
    );
  
    if (!matchingFlight) {
      alert('No flights available for this route!');
      return;
    }
  
    // Fill ticket details
    document.getElementById('ticketName').textContent = document.getElementById('passengerName').value;
    document.getElementById('ticketAge').textContent = document.getElementById('passengerAge').value;
    document.getElementById('ticketGender').textContent = document.getElementById('passengerGender').value;
    document.getElementById('ticketMobile').textContent = document.getElementById('passengerMobilenumber').value;
    document.getElementById('ticketEmail').textContent = document.getElementById('passengerEmail').value;
    document.getElementById('ticketPassport').textContent = document.getElementById('passengerPassport').value || 'N/A';
    document.getElementById('ticketNationality').textContent = document.getElementById('passengerNationality').value || 'N/A';
    
    document.getElementById('ticketFlightNo').textContent = matchingFlight.number;
    document.getElementById('ticketDate').textContent = document.getElementById('travelDate').value;
    document.getElementById('ticketFrom').textContent = matchingFlight.from;
    document.getElementById('ticketTo').textContent = matchingFlight.to;
    document.getElementById('ticketTakeoff').textContent = matchingFlight.takeoff;
    document.getElementById('ticketLanding').textContent = matchingFlight.landing;
    document.getElementById('ticketAmount').textContent = matchingFlight.amount;
  
    // Show ticket
    document.getElementById('ticket').style.display = 'block';
    document.getElementById('ticket').scrollIntoView({ behavior: 'smooth' });
  }
  
  // Initialize with home page
  showHome();