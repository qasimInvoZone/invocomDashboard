import Timeline from '@components/timeline'
import { Card, CardHeader, CardTitle, CardBody, Media } from 'reactstrap'

const data = [
  {
    title: 'Web Development',
    content: '15 requests daily',
    color: 'info'
  },
  {
    title: 'IOS Development',
    content: '10 requests daily',
    color: 'info'
  },
  {
    title: 'UI/UX Design',
    content: '5 requests daily',
    color: 'info'
  }
]

const UserTimeline = () => {
  return (
    <Card style={{height: '550px'}}>
      <CardHeader>
        <CardTitle tag='h4' className='mb-2 font-black'>
          Popular Categoriges
        </CardTitle>
      </CardHeader>
      <CardBody className="mt-4">
        <Timeline data={data} />
      </CardBody>
    </Card>
  )
}

export default UserTimeline
