import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export function SonnerDemo() {
  return (
    <Button
      variant="outline"
      onClick={() => toast("Votre demande a été envoyée avec succès")}
    >
      Show Toast
    </Button>
  )
}
