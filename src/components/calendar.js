import React from 'react';
import PropTypes from 'prop-types'
import moment from 'moment';
import './calendar.css';

moment.locale('en');

const Calendar = ({
  dateToUse
}) => {
  const dateAsMoment = moment(dateToUse, 'DD/MM/YYYY');
  const month = moment(dateToUse, 'DD/MM/YYYY')
    .format('MMMM');
  const year = moment(dateToUse, 'DD/MM/YYYY')
    .format('YYYY');
  const numberOfDays = moment(dateToUse, 'DD/MM/YYYY')
      .daysInMonth();
  const firstDayOfMonth = Number(
    moment(dateToUse, 'DD/MM/YYYY')
    .startOf('month')
    .day()
  );
  const dayOfMonth = Number(dateAsMoment.format('D'));
  return (
    <div className="calendar">
      <div className="calendar__firstRow">
        <div className="calendar__month">{month}</div>
        <div className="calendar__year">{year}</div>
      </div>
      <div className="calendar__secondRow">
        <ul>
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
      </div>
      <div className="calendar__thirdRow">
        <ul>
          {
            [...Array(firstDayOfMonth).keys()]
              .map((empty, index) => (
                <li
                  key={index}
                  className="calendar__day--empty"
                >
                  {index}
                </li>
              ))
          }
          {
            [...Array(numberOfDays).keys()]
              .map((empty, day) => (
                <li
                  key={day+1}
                  className={
                    day+1 === dayOfMonth
                      ? 'calendar__day--current'
                      : 'calendar__day'
                  }
                >
                  {day+1}
                </li>
              ))
          }
        </ul>
      </div>
    </div>
  );
};

Calendar.propTypes = {
  dateToUse: PropTypes.string
};

Calendar.defaultProps = {
  dateToUse: moment().format('DD/MM/YYYY')
};


export default Calendar;
