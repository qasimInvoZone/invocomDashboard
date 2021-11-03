import React, {useState} from "react"
import DateRangePicker from "react-daterange-picker"
import "react-daterange-picker/dist/css/react-calendar.css"
import originalMoment from "moment"
import { extendMoment } from "moment-range"
const moment = extendMoment(originalMoment)

const DateRange = () => {
  const today = moment()
  const [stat, setStat] = useState({
    value: moment.range(today.clone().subtract(7, "days"), today.clone())
  })
  

  const selectRange = (value, states) => {
    setStat({ value, states })
  }

  const SelectionValue = () => {
    return (
      <div>
        <div>Selection</div>
        {stat.value.start.format("YYYY-MM-DD")}
        {" - "}
        {stat.value.end.format("YYYY-MM-DD")}
      </div>
    )
  }

 
    return (
      <div>
        <div>{SelectionValue}</div>
        <DateRangePicker
          value={stat.value}
          onSelect={selectRange}
          singleDateRange={true}
        />
        
      </div>
    )
  
}

export default DateRange
