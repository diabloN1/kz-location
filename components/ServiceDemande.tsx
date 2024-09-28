import React, { useEffect, useState } from "react"
import { useUser } from "@auth0/nextjs-auth0/client"
import { ReloadIcon } from "@radix-ui/react-icons"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"

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
    if (id == 1) {
      setserviceType("Construction")
    } else if (id == 2) {
      setserviceType("Travaux Divers")
    } else if (id == 3) {
      setserviceType("Negoce")
    } else if (id == 4) {
      setserviceType("Import-Export")
    } else {
      setserviceType("Developpement")
    }
  }, [id])
  const [isLoading, setIsLoading] = useState(false)

  const notify = () =>
    toast.success(
      "Merci pour votre confiance ! \n Nous prendrons contact avec vous dans les 24 heures à venir.",
      {
        style: {
          border: "1px solid #713200",
          color: "#713200",
        },
        iconTheme: {
          primary: "#fb923c",
          secondary: "#FFFAEE",
        },
        duration: 12000,
      }
    )

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
    setIsLoading(true)
    try {
      const response = await axios.post("/api/xataPostService", addServiceR)
      console.log("Product created:", response.data)
      // Update state or perform other actions as needed
    } catch (error) {
      console.error("Error creating product:", error)
      // Handle errors as needed
    } finally {
      setNom("")
      setEmail("")
      setSubject("")
      setDescription("")
      setNum("")
      notify()
      setIsLoading(false)
      setTimeout(() => {
        setOpen(false)
      }, 1000)
    }

    onCancel()
  }

  //post service

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-amber-900 dark:bg-orange-400 text-white font-bold py-2 px-4 rounded border-2 border-white">
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
              defaultValue={serviceType}
              // value={
              //   id == 1
              //     ? "construction"
              //     : id == 2
              //     ? "travauxDivers"
              //     : id == 3
              //     ? "negoce"
              //     : id == 4
              //     ? "expo-impo"
              //     : id == 5
              //     ? "developpement"
              //     : ""
              // }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={"Construction"}>Construction</SelectItem>
                <SelectItem value={"Travaux Divers"}>Travaux divers</SelectItem>
                <SelectItem value={"Negoce"}>Negoce</SelectItem>
                <SelectItem value={"Import-Export"}>
                  {" "}
                  Exportation-importaion{" "}
                </SelectItem>
                <SelectItem value={"Developpement"}>Developpement</SelectItem>
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
              required
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
            {isLoading ? (
              <Button disabled>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button type="submit">Envoyer</Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
      <Toaster position="top-center" reverseOrder={false} />
    </Dialog>
  )
}
