import { useState } from 'react'
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

const PickerRange = () => {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [focusedInput, setFocusedInput] = useState(null)
  return (
    <>
       <DateRangePicker
        startDate={startDate}
        startDateId="s_id"
        endDate={endDate}
        endDateId="e_id"
        onDatesChange={({ startDate, endDate }) => { setStartDate(startDate); setEndDate(endDate) }}
        focusedInput={focusedInput}
        onFocusChange={e => setFocusedInput(e)}
        displayFormat="MMM,DD,yyyy"
        singleDateRange={true}
      />
    </>
  )
}

export default PickerRange
