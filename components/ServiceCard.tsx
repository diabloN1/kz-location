"use client"

import { useState } from "react"

import { Demande } from "./ServiceDemande"

// Assuming this is the existing ServiceCardProps interface
interface ServiceCardProps {
  image: string
  title: string
  description: string
  // Add the onButtonClick prop here
  onButtonClick?: () => void
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
  onButtonClick,
}) => {
  const [showDemande, setShowDemande] = useState(false)

  // Use the onButtonClick prop if it's provided
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick()
    }
    setShowDemande(true)
  }

  return (
    <div className="flex flex-col items-center p-4 bg-black shadow-lg rounded-lg border-2 border-white">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <button
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded border-2 border-white"
        onClick={onButtonClick}
      >
        Demande
      </button>
    </div>
  )
}
