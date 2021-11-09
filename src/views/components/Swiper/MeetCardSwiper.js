import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Card, CardBody } from 'reactstrap'
import AvatarGroup from '@components/avatar-group'
var moment = require('moment');
moment().format();
export default function MeetCardSwiper(props) {
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
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    // responsive: [
    //   {
    //     breakpoint: 800,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  }
  const renderMeetingCards = (cards) => {
    return cards?.map((card)=>{
      return <div>
        <Card className='card-developer-meetup'>
          <CardBody>
            <h2 className="text-dark"><strong>{card.scheduleMeeting.client.fullname}</strong></h2>
            <h6 className='mb-0'>{card.scheduleMeeting.specialMessage}</h6>
            <small>{
               moment(card.scheduleMeeting.date).toString()
            }</small>
            <AvatarGroup data={data} />
          </CardBody>
        </Card>
      </div>
    })
  }
  return (
    <Slider {...settings}>
      {renderMeetingCards(props?.meetingCard)}
    </Slider>
  )
}