import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Textarea } from "./ui/textarea"

interface DemandeProps {
  onCancel: () => void
  onSubmit: () => void
}

export function DialogDemo({ onCancel }: DemandeProps) {
  const [subject, setSubject] = useState("")
  const [num, setNum] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log({ subject, num, description })

    onCancel()
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded border-2 border-white">
          Demander
        </Button>
      </DialogTrigger>
      <DialogContent >
        <form className="grid gap-6" onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Demande de Service</DialogTitle>
            <DialogDescription>
              Remplire ce formulaire avec les informations demandees.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              placeholder="j'ai besoin de..."
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="num">Numero de telephone</Label>
            <Input
              id="num"
              type="number"
              placeholder="+212 XXXXXXXXX"
              value={num}
              onChange={(e) => setNum(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Decrivez votre besoin de ce service en plus de details."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <DialogFooter className="justify-between space-x-2">
            <Button variant="ghost" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit" >Submit</Button>
            
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
