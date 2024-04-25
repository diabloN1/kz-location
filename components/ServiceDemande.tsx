import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface DemandeProps {
  onCancel: () => void
}

export function Demande({ onCancel }: DemandeProps) {
  const [subject, setSubject] = useState("")
  const [num, setNum] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = () => {
    console.log({ subject, num, description })

    onCancel()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Demande de Service</CardTitle>
        <CardDescription>
          Remplire ce formulaire avec les informations demandees.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            placeholder="j'ai besoin de..."
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
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
      </CardContent>
      <CardFooter className="justify-between space-x-2">
        <Button variant="ghost" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </CardFooter>
    </Card>
  )
}
