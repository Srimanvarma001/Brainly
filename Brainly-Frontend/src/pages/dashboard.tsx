
import '../App.css'
import { Card } from '../components/ui/Card'
import { Sidebar } from '../components/ui/Sidebar'
import { Button } from '../components/ui/Button'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { CreateContentModal } from '../components/ui/CreateContentModal'
import { useState } from 'react'
import { TwitterIcon } from '../icons/TwitterIcon'

export  function Dashboard() {
  const [modalOpen,setModalOpen] = useState(false);
  return (
    <div>
      <Sidebar/>
      <div className='p-4 ml-72 min-h-screen bg-gray-100 '>
        <CreateContentModal open={modalOpen} onClose={()=>{
          setModalOpen(false);
        }}/>
        <div className='flex justify-end gap-4'>
          <Button  variant='secondary' startIcon={<ShareIcon/>} text='Share Brain' onClick={()=>{setModalOpen(true);}}></Button>
          <Button variant='primary'startIcon={<PlusIcon size='lg'/>}  text='Add Content' onClick={()=>{setModalOpen(true);}}></Button>
        </div>
        <div className='flex gap-4'>
          <Card title="First project" link="https://www.youtube.com/watch?v=NOJQgcfSL8k" type="youtube"/>
          <Card title="First Twitter Post" link="https://x.com/alcoachxyz/status/1886139304574865827" type="twitter"/>
        </div>
      </div>
      <TwitterIcon/>

    </div>
  )
}

