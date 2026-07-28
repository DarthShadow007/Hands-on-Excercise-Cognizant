import React, { useState } from 'react';

function App() {
  const [bookingData, setBookingData] = useState({
    name: '',
    destination: 'Mumbai',
    tickets: 1
  });
  
  // State to manage conditional rendering view
  const [isBooked, setIsBooked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookingData.name.trim() === '') {
      alert('Please enter a passenger name!');
      return;
    }
    setIsBooked(true);
  };

  const handleReset = () => {
    setIsBooked(false);
    setBookingData({ name: '', destination: 'Mumbai', tickets: 1 });
  };

  const ticketPrice = 1500;
  const totalPrice = bookingData.tickets * ticketPrice;

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ padding: '30px', border: '1px solid #ddd', borderRadius: '12px', boxShadow: '0 8px 16px rgba(0,0,0,0.1)', backgroundColor: '#fff' }}>
        <h1 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '20px' }}>
          Express Rail Booking 🚆
        </h1>

        {/* Conditional Rendering: Show Form if NOT booked, else show Ticket */}
        {!isBooked ? (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Passenger Name:</label>
              <input
                type="text"
                name="name"
                value={bookingData.name}
                onChange={handleChange}
                placeholder="Enter full name"
                style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Destination:</label>
              <select
                name="destination"
                value={bookingData.destination}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }}
              >
                <option value="Mumbai">Mumbai (₹1,500)</option>
                <option value="Delhi">Delhi (₹1,500)</option>
                <option value="Bengaluru">Bengaluru (₹1,500)</option>
                <option value="Bhopal">Bhopal (₹1,500)</option>
              </select>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Number of Tickets:</label>
              <input
                type="number"
                name="tickets"
                min="1"
                max="10"
                value={bookingData.tickets}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }}
              />
            </div>

            <button
              type="submit"
              style={{ width: '100%', padding: '12px', backgroundColor: '#27ae60', color: 'white', border: 'none', borderRadius: '6px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}
            >
              Book Ticket (Total: ₹{totalPrice})
            </button>
          </form>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div style={{ padding: '20px', border: '2px dashed #27ae60', borderRadius: '10px', backgroundColor: '#f4fbf7', marginBottom: '20px' }}>
              <span style={{ fontSize: '40px' }}>🎟️</span>
              <h2 style={{ color: '#27ae60', margin: '10px 0' }}>Booking Confirmed!</h2>
              <p style={{ margin: '5px 0' }}><strong>Passenger:</strong> {bookingData.name}</p>
              <p style={{ margin: '5px 0' }}><strong>Destination:</strong> {bookingData.destination}</p>
              <p style={{ margin: '5px 0' }}><strong>Tickets:</strong> {bookingData.tickets}</p>
              <p style={{ margin: '5px 0' }}><strong>Total Paid:</strong> ₹{totalPrice}</p>
            </div>

            <button
              onClick={handleReset}
              style={{ padding: '10px 20px', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '15px' }}
            >
              Book Another Ticket
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;