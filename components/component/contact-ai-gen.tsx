"use client"

import React, { use, useEffect, useState } from "react"
import { ReloadIcon } from "@radix-ui/react-icons"
import axios from "axios"
import { useTheme } from "next-themes"
import toast, { Toaster } from "react-hot-toast"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { PhoneInput } from "../ui/phoneInput"

export function ContactAiGen() {
  const [fullName, setFullName] = useState("")
  const [num, setNum] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [addContact, setaddContact] = useState({})
  const [isLoading, setIsloading] = useState(false)

  const { theme } = useTheme()

  useEffect(() => {
    setaddContact({
      fullName: fullName,
      num: num,
      email: email,
      message: message,
    })
  }, [fullName, num, email, message])

  {
    theme === "light"
      ? "https://i.ibb.co/qDhjYrR/light.webp"
      : "https://i.ibb.co/sbRPkVW/dark.webp"
  }

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
        duration: 60000,
      }
    )

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsloading(true)
    setaddContact({
      fullName: fullName,
      num: num,
      email: email,
      message: message,
    })
    try {
      const response = await axios.post("/api/xataPostContact", addContact)
      console.log("Product created:", response.data)
      // Update state or perform other actions as needed
    } catch (error) {
      console.error("Error creating product:", error)
      // Handle errors as needed
    } finally {
      setIsloading(false) // Set loading state to false after the comment is added or an error occurs
      setFullName("")
      setNum("")
      setEmail("")
      setMessage("")
      notify()
    }
  }
  const [isFormValid, setIsFormValid] = useState(false)
  const checkFormValidity = () => {
    const isValid =
      fullName.trim() !== "" && email.trim() !== "" && num.length >= 13
    setIsFormValid(isValid)
  }
  useEffect(() => {
    checkFormValidity()
  }, [fullName, num, email])

  return (
    <div className=" min-h-[100dvh] flex flex-col">
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 animate-fadeInUp">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold animate-fadeIn text-amber-900 dark:text-orange-400">
                Contactez Nous
              </h1>
              <p className="text-gray-500 dark:text-gray-400 animate-fadeIn">
                Pour en savoir plus, contactez-nous.
              </p>
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-start gap-4">
                  <div className="h-6 w-6 text-gray-500 dark:text-gray-400 mt-1 animate-bounce">
                    <PhoneIcon />
                  </div>
                  <div>
                    <h3 className="font-medium animate-fadeIn">Numero</h3>
                    <p className="text-gray-500 dark:text-gray-400 animate-fadeIn">
                      0708162668
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 animate-fadeIn">
                      0708014286
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-6 w-6 text-gray-500 dark:text-gray-400 mt-1 animate-bounce">
                    <MailIcon />
                  </div>
                  <div>
                    <h3 className="font-medium animate-fadeIn">Email</h3>
                    <p className="text-gray-500 dark:text-gray-400 animate-fadeIn">
                      {" "}
                      <a href="mailto:orientalbuildingstrategy@gmail.com">
                        orientalbuildingstrategy@gmail.com
                      </a>{" "}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-6 w-6 text-gray-500 dark:text-gray-400 mt-1 animate-bounce">
                    <MapPinIcon />
                  </div>
                  <div>
                    <h3 className="font-medium animate-fadeIn">Adresse</h3>
                    <p className="text-gray-500 dark:text-gray-400 animate-fadeIn">
                      244 Q.I SIDI GHANEM BUREAU A GAUCHE ETAGE 1 MARRAKECH{" "}
                    </p>
                  </div>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424.480347857438!2d-8.035219862402762!3d31.6655207544557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafec11f73d0d6d%3A0x76606247de304961!2sMX88%2B53W%2C%20Marrakech!5e0!3m2!1sfr!2sma!4v1714628652138!5m2!1sfr!2sma"
                  className="w-full h-96 rounded-lg animate-fadeIn"
                  title="Location Map"
                ></iframe>
              </div>
            </div>
            <div className="bg-amber-100 dark:bg-black rounded-lg p-6 md:p-8 animate-fadeInUp">
              <h2 className="text-2xl font-bold mb-4 animate-fadeIn text-amber-900 dark:text-orange-400">
                Prenez contact avec nous
              </h2>
              <form
                className="space-y-4 animate-fadeIn"
                onSubmit={handleSubmit}
              >
                <div className="space-y-2">
                  <Label htmlFor="name">Nom Complet</Label>
                  <Input
                    className="animate-pulse"
                    id="name"
                    placeholder="Enter votre nom"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Numero de telephone</Label>
                  <PhoneInput
                    value={num}
                    onChange={setNum}
                    defaultCountry="MA"
                    placeholder="Enter votre numero ici"
                    international
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    className="animate-pulse"
                    id="email"
                    placeholder="Enter votre email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    className="min-h-[250px] animate-pulse"
                    id="message"
                    placeholder="Enter votre message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                {isLoading ? (
                  <Button className="w-full" disabled>
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </Button>
                ) : (
                  <Button className="w-full" type="submit">
                    Enovoyer Message
                  </Button>
                )}
              </form>
              {/* <Toaster /> */}
              <Toaster position="top-center" reverseOrder={false} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
