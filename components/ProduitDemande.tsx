import React, { useEffect, useState } from "react"
import { useUser } from "@auth0/nextjs-auth0/client"
import { ReloadIcon } from "@radix-ui/react-icons"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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
import "react-simple-toasts/dist/theme/dark.css"

interface DemandeProps {
  id: any
  name: string
}

export function DialogDemo({ id, name }: DemandeProps) {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { user } = useUser()
  user ? console.log(user) : console.log("no user")

  const [nameP, setNameP] = useState("")
  const [num, setNum] = useState("")
  const [nom, setNom] = useState("")
  const [email, setEmail] = useState("")
  const [addProductR, setaddProductR] = useState({})
  const [pickupDate, setPickupDate] = useState("")
  const [dropoffDate, setDropoffDate] = useState("")
  const [pickupLoc, setPickupLoc] = useState("")
  const [dropoffLoc, setDropoffLoc] = useState("")

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
    setaddProductR({
      nameP: nameP,
      idP: id,
      mail: email,
      fullName: nom,
      num: num,
    })
  }, [nameP, email, nom, num])

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsLoading(true)

    try {
      const response = await axios.post("/api/xataPostProduct", addProductR)
      console.log("Product created:", response.data)
      // Update state or perform other actions as needed
    } catch (error) {
      console.error("Error creating product:", error)
      // Handle errors as needed
    } finally {
      setIsLoading(false)
      notify()
      setTimeout(() => {
        setOpen(false)
      }, 1000) // 5000 milliseconds = 5 seconds
    }
  }

  //post service
  //check validity of form to make submit button clickable
  const [isFormValid, setIsFormValid] = useState(false)
  const checkFormValidity = () => {
    const isValid = nom.trim() !== "" && num.length >= 13 && pickupDate != "" && dropoffDate != "" && pickupLoc != "" && dropoffLoc != ""
    setIsFormValid(isValid)
  }
  useEffect(() => {
    checkFormValidity()
  }, [nom, num, pickupDate, dropoffDate, pickupLoc, dropoffLoc])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="hover:bg-primary/90 focus:ring-primary "
          size="lg"
          variant="default"
        >
          <div className="mr-2">
            <ShoppingCartIcon />
          </div>
          Commandez maintenant
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form className="grid gap-6" onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Louer la voiture</DialogTitle>
            <DialogDescription>
              Remplire ce formulaire avec les informations demandees.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-2">
            <Label htmlFor="produit">Produit</Label>
            <Input
              id="produit"
              value={name}
              onChange={(e) => setNameP(e.target.value)}
              disabled
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
          {/* ----------------Select Date------------- */}
          <div className="flex grid-cols-2 w-[100%]">
            <Label className="w-full content-center">Date de livraison</Label>
            <Input
              type="date"
              onChange={(e)=>setPickupDate(e.target.value)}
              className="rounded-md border w-auto w-full text-center"
              required
            />
          </div>
          <div className="flex grid-cols-2 w-[100%]">
          <Label className="w-full content-center">Date de retour</Label>
            <Input
              type="date"
              onChange={(e)=>setDropoffDate(e.target.value)}
              className="rounded-md border w-full text-center"
              required
            />
          </div>
          {/* --------------Select Place--------------- */}
          <div className="flex grid-cols-2 w-[100%]">
            <Label className="w-full content-center">Lieu de livraison</Label>
            <Select onValueChange={(e: string) => setPickupLoc(e)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Lieu de livraison" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Lieu disponible</SelectLabel>
                  <SelectItem value="Agence KZ">Casablanca - Agence KZloc.</SelectItem>
                  <SelectItem value="Aéroport Mohammed V">Casablanca - Aéroport Mohammed V</SelectItem>
                  <SelectItem value="Aéroport Casa Anfa">Casablanca - Aéroport Casa Anfa</SelectItem>
                  <SelectItem value="Gare Casa Port">Casablanca - Gare Casa Port</SelectItem>
                  <SelectItem value="Gare Casa Voyageurs">Casablanca - Gare Casa Voyageurs</SelectItem>
                  <SelectItem value="Gare Casa Oasis">Casablanca - Gare Casa Oasis</SelectItem>
                  <SelectItem value="Hotel">Casablanca - Hotel (spécifier l'hors du confirmation)</SelectItem>
                  <SelectItem value="Autre">Casablanca - Autre (spécifier l'hors du confirmation)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          
          <div className="flex grid-cols-2 w-[100%]">
            <Label className="w-full content-center">Lieu de retour</Label>
            <Select onValueChange={(e: string) => setDropoffLoc(e)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Lieu de retour" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Lieu disponible</SelectLabel>
                  <SelectItem value="Agence KZ">Casablanca - Agence KZloc.</SelectItem>
                  <SelectItem value="Aéroport Mohammed V">Casablanca - Aéroport Mohammed V</SelectItem>
                  <SelectItem value="Aéroport Casa Anfa">Casablanca - Aéroport Casa Anfa</SelectItem>
                  <SelectItem value="Gare Casa Port">Casablanca - Gare Casa Port</SelectItem>
                  <SelectItem value="Gare Casa Voyageurs">Casablanca - Gare Casa Voyageurs</SelectItem>
                  <SelectItem value="Gare Casa Oasis">Casablanca - Gare Casa Oasis</SelectItem>
                  <SelectItem value="Hotel">Casablanca - Hotel (spécifier l'hors du confirmation)</SelectItem>
                  <SelectItem value="Autre">Casablanca - Autre (spécifier l'hors du confirmation)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/* ------------------------------------------ */}
          <div className="grid gap-2">
            <Label htmlFor="email">Adresse mail (optionnel)</Label>
            {user && user.nickname ? (
              <Input id="email" type="email" value={user.nickname} disabled />
            ) : (
              <Input
                id="email"
                type="email"
                placeholder="5HcXK@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            )}
          </div>
          <div className="grid gap-2"></div>
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
              <Button type="submit" disabled={!isFormValid}>
                Envoyer
              </Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
      <Toaster position="top-center" reverseOrder={false} />
    </Dialog>
  )
}
function ShoppingCartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}
