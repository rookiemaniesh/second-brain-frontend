
import Button from './Components/button'
import { Card } from './Components/card'
import { PlusIcon } from './icons/plusIcon'
import { ShareIcon } from './icons/shareIcon'

const App = () => {
  return (
    <div className='min-h-screen bg-grey-200'>
      <div className='flex justify-end pr-6'>  
    <Button startIcon={<PlusIcon size="md"/>} variant="primary" text="Submit" size="md" />
    <Button startIcon={<ShareIcon size="md"/>} variant="secondary" text="Submit" size="md" />
   </div> 
   <div className='flex flex-wrap gap-4 pl-4'>
    <Card type="Youtube" title='Very important' link='https://youtu.be/bupetqS1SMU?si=ozERMsaxaliMw8FT' />
    <Card type="Tweets" title='Very important' link='https://twitter.com/manishDebugs/status/1933956634252079134' />
   </div>
    </div>
  )
}

export default App
