import { NextResponse } from "next/server"

import { getXataClient } from "@/lib/xata"

export async function DELETE(req: Request) {
  const xata = getXataClient()
  try {
    const { id } = await req.json()

    // Delete the record from the Demande_P table by ID
    await xata.db.Reviews.delete(id)

    return NextResponse.json({ message: "Record deleted successfully" })
  } catch (error) {
    // Handle errors and send an error response
    return NextResponse.json(
      { error: "Failed to delete record" },
      { status: 500 }
    )
  }
}
