// ** Custom Components
import Avatar from '@components/avatar'
import Timeline from '@components/timeline'

// ** Images
import ceo from '@src/assets/images/avatars/12-small.png'
import pdf from '@src/assets/images/icons/file-icons/pdf.png'

// ** Third Party Components
import { Card, CardHeader, CardTitle, CardBody, Media } from 'reactstrap'

// ** Timeline Data
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
