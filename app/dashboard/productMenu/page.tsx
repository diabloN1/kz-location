"use client"

// import fetchers to fetch data
import useSWR from "swr"

import fetcher from "@/lib/fetcher"
import { Button } from "@/components/ui/button"
//import side bar to add product shadcn
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
//import table shadcn
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

function Products() {
  const { data, error } = useSWR("/api/xataClient", fetcher)

  if (error) return <div>Failed to load products</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className="xl: m-10">
      <Sheet>
        <SheetTrigger>
          <Button className="m-20">+ Add product</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Table className="w-[90%] mx-auto">
        <TableCaption>List of products</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Product</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map(
            (product: {
              id: string
              name: string
              description: string
              price: number
            }) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell className="text-right">{product.price} MAD</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default Products
