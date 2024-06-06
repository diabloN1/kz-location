import React, { useEffect, useState } from "react"
import { useUser } from "@auth0/nextjs-auth0/client"
import axios from "axios"
import { PhoneNumber } from "react-phone-number-input"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { PhoneInput } from "./ui/phoneInput"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Textarea } from "./ui/textarea"
import { toast } from "sonner"
import { Toast } from "@radix-ui/react-toast"
import { Toaster } from "./ui/toaster"

interface DemandeProps {
  onCancel: () => void
  onSubmit: () => void
  id: number
}

export function DialogDemo({ onCancel, id }: DemandeProps) {
  const [open, setOpen] = useState(false)

  const { user } = useUser()
  user ? console.log(user) : console.log("no user")

  const [subject, setSubject] = useState("")
  const [num, setNum] = useState("")
  const [description, setDescription] = useState("")
  const [nom, setNom] = useState("")
  const [email, setEmail] = useState("")
  const [serviceType, setserviceType] = useState("")
  const [addServiceR, setaddServiceR] = useState({})

  useEffect(() => {
    setaddServiceR({
      serviceType: serviceType,
      name: nom,
      email: email,
      subject: subject,
      Description: description,
      num: num,
    })
  }, [serviceType, nom, email, subject, description, num])

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setOpen(false)
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-amber-900 dark:bg-orange-500 text-white font-bold py-2 px-4 rounded border-2 border-white">
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
                  : id == 5
                  ? "developpement"
                  : ""
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={"construction"}>Construction</SelectItem>
                <SelectItem value={"travauxDivers"}>Travaux divers</SelectItem>
                <SelectItem value={"negoce"}>Negoce</SelectItem>
                <SelectItem value={"expo-impo"}> Exportation-importaion </SelectItem>
                <SelectItem value={"developpement"}>Developpement</SelectItem>
                <SelectItem value={"autre"}>Autre</SelectItem>
              </SelectContent>
            </Select>
          </div>
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
            <PhoneInput
              value={num}
              onChange={setNum}
              defaultCountry="MA"
              placeholder="Enter votre numero ici"
              international
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Adresse mail</Label>
            {user && user.nickname ? (
              <Input id="email" type="email" value={user.nickname} disabled />
            ) : (
              <Input
                id="email"
                type="email"
                placeholder="5HcXK@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            )}
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
            <DialogClose asChild>
              <Button type="button" variant="ghost">
                Close
              </Button>
            </DialogClose>
            <Button
              type="submit"
            >
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
