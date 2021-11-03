import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import Filter from '../../../assets/images/icons/customIcons/filters.svg'
// eslint-disable-next-line no-duplicate-imports
import { Button, Col, Form, FormGroup, Label, Input, Row} from 'reactstrap'


const FilterDropDown = () => {
  return (
    <div className='demo-inline-spacing'>
      <UncontrolledButtonDropdown>
        <DropdownToggle outline color='primary' style={{padding: '1.1rem'}}>
         <img src={Filter} alt="" style={{height: '12px'}}/>
        </DropdownToggle>
        <DropdownMenu>
        <Form className="filter_dropdown" >
      <FormGroup row  >
        <Label classname="label" ><span>Filters</span></Label>
        <Col sm={{ size: 10 }} style={{margin: '15px'}}>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Total Leads
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Responded Leads
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Un-assigned Leads
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Dummy
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Dummy
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Dummy
            </Label>
          </FormGroup>

        </Col>
      </FormGroup>
      <FormGroup check row style={{padding: '0px'}}>
     <div className="d-flex justify-content-around">
          <Button>cancel</Button>
          <Button color={'blue'} className="bg-primary text-white">Apply</Button>
      </div>  
      </FormGroup>
    </Form>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
     
    </div>
  )
}

export default FilterDropDown
