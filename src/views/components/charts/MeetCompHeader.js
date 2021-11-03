import CalenderDropDown from './CalenderIconDropDown'
import PickerHumanFriendly from '../datepicker/PickerHumanFriendly'


const CalenderComplete = () => {
    return (
        <>
    <div className = 'chart_calender_leads' >
    <ul>
        <CalenderDropDown />
    </ul>
    <ul className="d-flex">

        <PickerHumanFriendly />
    </ul>
</div>
</>
  )
}

export default CalenderComplete
