

document.querySelectorAll(".dropdown-item").forEach(item => {
  item.addEventListener("click", function () {
    const parent = this.closest('.input-group');
    const input = parent.querySelector("input");
    input.value = this.textContent;
  });
});

const flights = [
  {
    number: '6E101',
    date: '2025-05-01',
    name: 'IndiGo Express',
    takeoff: '08:00 AM',
    landing: '10:15 AM',
    from: 'Chennai',
    to: 'Delhi',
    amount: '₹4,500'
  },
  {
    number: '6E202',
    date: '2025-05-01',
    name: 'IndiGo Prime',
    takeoff: '10:30 AM',
    landing: '12:45 PM',
    from: 'Goa',
    to: 'Mumbai',
    amount: '₹3,800'
  },
  {
    number: '6E303',
    date: '2025-05-01',
    name: 'IndiGo Swift',
    takeoff: '01:00 PM',
    landing: '03:10 PM',
    from: 'Kolkata',
    to: 'Hyderabad',
    amount: '₹5,000'
  },
  {
    number: '6E404',
    date: '2025-05-01',
    name: 'IndiGo Sky',
    takeoff: '03:15 PM',
    landing: '05:00 PM',
    from: 'Mumbai',
    to: 'Bangalore',
    amount: '₹4,200'
  },
  {
    number: '6E505',
    date: '2025-05-01',
    name: 'IndiGo Connect',
    takeoff: '05:45 PM',
    landing: '08:00 PM',
    from: 'Delhi',
    to: 'Chennai',
    amount: '₹5,500'
  },
  {
    number: '6E606',
    date: '2025-05-01',
    name: 'IndiGo Lite',
    takeoff: '07:00 PM',
    landing: '09:20 PM',
    from: 'Hyderabad',
    to: 'Kolkata',
    amount: '₹4,900'
  },
  {
    number: '6E707',
    date: '2025-05-01',
    name: 'IndiGo Jet',
    takeoff: '09:00 PM',
    landing: '11:30 PM',
    from: 'Bangalore',
    to: 'Delhi',
    amount: '₹5,300'
  },
  {
    number: '6E808',
    date: '2025-05-01',
    name: 'IndiGo Cruiser',
    takeoff: '11:30 PM',
    landing: '01:40 AM',
    from: 'Chennai',
    to: 'Goa',
    amount: '₹3,700'
  },
  {
    number: '6E909',
    date: '2025-05-01',
    name: 'IndiGo Wings',
    takeoff: '06:00 AM',
    landing: '08:15 AM',
    from: 'Mumbai',
    to: 'Kolkata',
    amount: '₹4,800'
  },
  {
    number: '6E010',
    date: '2025-05-01',
    name: 'IndiGo Dash',
    takeoff: '12:00 PM',
    landing: '02:30 PM',
    from: 'Delhi',
    to: 'Hyderabad',
    amount: '₹5,100'
  }
];

function abc() {
  const from = document.getElementById('frombox').value.trim().toLowerCase();
  const to = document.getElementById('tobox').value.trim().toLowerCase();

  const matchingFlight = flights.find(f =>
    f.from.toLowerCase() === from && f.to.toLowerCase() === to
  );

  
  const name = document.getElementById('passengerName').value;
  const age = document.getElementById('passengerAge').value;
  const gender = document.getElementById('passengerGender').value;
  const mobile = document.getElementById('passengerMobilenumber').value;
  const email = document.querySelector('input[type="email"]').value;
  const passport = document.querySelector('input[placeholder*="Passport"]').value;
  const nationality = document.querySelector('input[placeholder*="Nationality"]').value;

  const ticketDiv = document.getElementById('ticket');

  if (matchingFlight) {
    document.getElementById('ticketName').innerText = name;
    document.getElementById('ticketAge').innerText = age;
    document.getElementById('ticketGender').innerText = gender;
    document.getElementById('ticketMobile').innerText = mobile;
    document.getElementById('ticketEmail').innerText = email;
    document.getElementById('ticketPassport').innerText = passport;
    document.getElementById('ticketNationality').innerText = nationality;
    document.getElementById('ticketFlightNo').innerText = matchingFlight.number;
    document.getElementById('ticketDate').innerText = matchingFlight.date;
    document.getElementById('ticketFrom').innerText = matchingFlight.from;
    document.getElementById('ticketTo').innerText = matchingFlight.to;
    document.getElementById('ticketTakeoff').innerText = matchingFlight.takeoff;
    document.getElementById('ticketLanding').innerText = matchingFlight.landing;
    document.getElementById('ticketAmount').innerText = matchingFlight.amount;

    ticketDiv.classList.remove('d-none');
  } else {
    alert("No matching flight found.");
    ticketDiv.classList.add('d-none');
  }
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







function book(){
  let book  = document.getElementById('book')
  book.style.display='block'
  
  let flightstatuson = document.getElementById('flight_status');
  flightstatuson.style.display='none';
  home.style.display='none'
}

function fligthstatus(){

  let flightstatuson = document.getElementById('flight_status');
  flightstatuson.style.display='block';

  let book  = document.getElementById('book')
  book.style.display='none'
  home.style.display='none'
}
