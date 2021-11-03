import Avatar from '@components/avatar'
import * as Icon from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, Media } from 'reactstrap'

const AnalyticalCardTransactions = () => {
  const transactionsArr = [
    {
      title: '12:30PM to 1:00AM',
      subtitle: '12000 messages'
    },
    {
      title: '12:30PM to 1:00AM',
      subtitle: '12000 messages'
    },
    {
      title: '12:30PM to 1:00AM',
      subtitle: '12000 messages'
    },
    {
      title: '12:30PM to 1:00AM',
      subtitle: '12000 messages'
    },
    {
      title: '12:30PM to 1:00AM',
      subtitle: '12000 messages'
    }
  ]

  const renderTransactions = () => {
    return transactionsArr.map(item => {
      return (
        <div key={item.title} className='transaction-item'>
          
              <h6 className='transaction-title'>{item.title}</h6>
              
          <div >{item.subtitle}</div>
        </div>
      )
    })
  }

  return (
    <Card className='card-transaction'>
      <CardHeader>
        <CardTitle tag='h4'>Most Active Hours</CardTitle>
        <Icon.MoreVertical size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody style={{height: '480px'}}>{renderTransactions()}</CardBody>
    </Card>
  )
}

export default AnalyticalCardTransactions
