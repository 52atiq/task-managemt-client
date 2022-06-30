import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const Calendar = () => {
    const [selected, setSelected] = useState('')
    return (
        <div className='flex justify-center mt-20'>
            <DayPicker
             mode="single"
             selected={selected}
             onSelect={setSelected}
             />
        </div>
    );
};

export default Calendar;