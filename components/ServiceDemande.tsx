import React, { useState } from "react"
import axios from "axios"

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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Textarea } from "./ui/textarea"

interface DemandeProps {
  onCancel: () => void
  onSubmit: () => void
  id: number
}

export function DialogDemo({ onCancel, id }: DemandeProps) {
  const [subject, setSubject] = useState("")
  const [num, setNum] = useState("")
  const [description, setDescription] = useState("")
  const [nom, setNom] = useState("")
  const [email, setEmail] = useState("")
  const [serviceType, setserviceType] = useState("")
  const [addServiceR, setaddServiceR] = useState({})

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setaddServiceR({
      serviceType: serviceType,
      name: nom,
      email: email,
      subject: subject,
      Description: description,
      num: num,
    })
    try {
      const response = await axios.post("/api/xataPostService", addServiceR)
      console.log("Product created:", response.data)
      // Update state or perform other actions as needed
    } catch (error) {
      console.error("Error creating product:", error)
      // Handle errors as needed
    }

    onCancel()
  }

  //post service

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-amber-900 dark:bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded border-2 border-white">
          Demander
        </Button>
      </DialogTrigger>
      <DialogContent>
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
            <Label htmlFor="nom">Nom complet</Label>
            <Input
              id="nom"
              placeholder="votre nom complet"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
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
            <Label htmlFor="email">Adresse mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="5HcXK@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <div className="grid gap-2">
            <Label htmlFor="type">Service choisi</Label>
            <Select
              onValueChange={(e: string) => setserviceType(e)}
              defaultValue={
                id == 1
                  ? "construction"
                  : id == 2
                  ? "travauxDivers"
                  : id == 3
                  ? "negoce"
                  : id == 4
                  ? "expo-impo"
                  : ""
              }
            >
              <SelectTrigger className="w-[320px]">
                <SelectValue placeholder="Choose a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={"construction"}>construction</SelectItem>
                <SelectItem value={"travauxDivers"}>travaux divers</SelectItem>
                <SelectItem value={"negoce"}>negoce</SelectItem>
                <SelectItem value={"expo-impo"}>
                  exportation-importaion
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter className="justify-between space-x-2">
            <Button variant="ghost" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
