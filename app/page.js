'use client'
import Button from '@/components/Button'
import DialogueBox from '@/components/DialogueBox'
import { useState } from 'react'

export default function Home() {
  const [openDialogue, setOpenDialogue] = useState(false)

  const toggleDialogue = () => {
    if (openDialogue) {
      setOpenDialogue(false)
    } else {
      setOpenDialogue(true)
    }
  }

  const handleClick = () => {
    if (!openDialogue) return
    setOpenDialogue(false)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {openDialogue ? (
        <DialogueBox onClick={toggleDialogue} />
      ) : (
        <Button onCLick={toggleDialogue}>
          <span>Dialogue Box</span>
        </Button>
      )}
    </main>
  )
}
