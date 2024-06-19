// /api/xataDelRev

import { NextResponse } from "next/server"

import { getXataClient } from "@/lib/xata"

export const DELETE = async (req: Request) => {
  try {
    // const revId = req.url.split("/:")[1]
    // or
    const { revId } = await req.json()

    const xata = getXataClient()
    const deletedReview = await xata.db.Reviews.delete(revId)

    return NextResponse.json(deletedReview)
  } catch (error: any) {
    console.error("Error deleting review:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
