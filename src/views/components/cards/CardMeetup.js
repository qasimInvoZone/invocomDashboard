
import AvatarGroup from '@components/avatar-group'
import { Card, CardTitle, CardBody, CardText, Media, Row, Col } from 'reactstrap'

const CardMeetup = () => {
  const data = [
    {
      title: 'Billy Hopkins',
      placement: 'bottom',
      img: require('@src/assets/images/portrait/small/avatar-s-9.jpg').default,
      imgHeight: 33,
      imgWidth: 33
    },
    {
      title: 'Amy Carson',
      placement: 'bottom',
      img: require('@src/assets/images/portrait/small/avatar-s-6.jpg').default,
      imgHeight: 33,
      imgWidth: 33
    },
    {
      meta: '+'
    }
  ]

  return (
    <Row className="px-1">
<Col md='6' xl='4'>
    <Card className='card-developer-meetup'>

      <CardBody>

        <h2 className="text-dark"><strong>Mr.Alvis</strong></h2>
        <h6 className='mb-0'>Web Development</h6>
        <small>10:AM to 6:PM</small>

        <AvatarGroup data={data} />
      </CardBody>
    </Card>
    </Col>

    <Col md='6' xl='4'>
    <Card className='card-developer-meetup'>

        <CardBody>

          <h2 className="text-dark"><strong>Mr.Alvis</strong></h2>
          <h6 className='mb-0'>Web Development</h6>
          <small>10:AM to 6:PM</small>

          <AvatarGroup data={data} />
        </CardBody>
      </Card>
      </Col>
      <Col>
      <Card className='card-developer-meetup'>

        <CardBody>

          <h2 className="text-dark"><strong>Mr.Alvis</strong></h2>
          <h6 className='mb-0'>Web Development</h6>
          <small>10:AM to 6:PM</small>

          <AvatarGroup data={data} />
        </CardBody>
      </Card>
      </Col>
      </Row>
  )
}

export default CardMeetup
