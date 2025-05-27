import React, { useState, useEffect } from 'react';
import './Calendar.css';

const appointmentsData = {
  '2025-06-03': ["9:00 A.M. - 11:00 A.M.",'Dentist', 'Dr.Cameron Williamson'],
  '2025-06-13': ["11:00 A.M. - 1:00 P.M.",'Physiotherapy',"Dr.Kevin Djones"],
  '2025-06-17': ["10:00 A.M. - 12:00 P.M.",'Health Checkup', 'Dr.Rahul Kalathiya'],
  '2025-06-26': ["2:00 P.M. - 4:00 P.M.",'Ophthalmologist',"Dr.Narendra Dodiya"],
};

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null); 
  const [nextAppointment, setNextAppointment] = useState(null);

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const today = new Date();

  useEffect(() => {
    const futureDates = Object.keys(appointmentsData)
      .filter(date => new Date(date) >= today)
      .sort();

    if (futureDates.length > 0) {
      setNextAppointment({
        date: futureDates[0],
        events: appointmentsData[futureDates[0]],
      });
    }
  }, []);

  const generateCalendar = (month, year) => {
    const daysInMonth = getDaysInMonth(month, year);
    const firstDayIndex = new Date(year, month, 1).getDay();

    const calendarCells = [];

    for (let i = 0; i < firstDayIndex; i++) {
      calendarCells.push(<div key={`empty-${i}`} className="calendar-cell empty"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const fullDate = `2025-06-${String(day).padStart(2, '0')}`;
      const isSelected = selectedDate === fullDate;
      const hasAppointment = !!appointmentsData[fullDate];

      calendarCells.push(
        <div
          key={day}
          className={`calendar-cell ${hasAppointment ? 'has-appointment' : ''} ${isSelected ? 'selected animated' : ''}`}
          onClick={() => setSelectedDate(fullDate)}
        >
          {day}
        </div>
      );
    }

    return calendarCells;
  };

  const renderAppointments = () => {
    if (!selectedDate || !appointmentsData[selectedDate]) return null;

    return (
      <div className="appointments">
        <h3>Appointments on {selectedDate}:</h3>
        <ul>
          {appointmentsData[selectedDate].map((appointment, index) => (
            <li key={index}>{appointment}</li>
          ))}
        </ul>
      </div>
    );
  };

  const renderNextAppointment = () => {
    if (!nextAppointment) return null;

    return (
      <div className="next-appointment">
        <h3>Next Upcoming Appointment:</h3>
        <p><strong>{nextAppointment.date}</strong></p>
        <ul>
          {nextAppointment.events.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="calendar-container">
      <h2 className="calendar-title">June 2025</h2>
      <div className="calendar-grid">
        <div className="calendar-header">Sun</div>
        <div className="calendar-header">Mon</div>
        <div className="calendar-header">Tue</div>
        <div className="calendar-header">Wed</div>
        <div className="calendar-header">Thu</div>
        <div className="calendar-header">Fri</div>
        <div className="calendar-header">Sat</div>
        {generateCalendar(5, 2025)}
      </div>
      {renderAppointments()}
      {renderNextAppointment()}
    </div>
  );
};

export default Calendar;