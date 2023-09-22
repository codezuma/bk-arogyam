import { Button } from "@components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog"
import ContactForm from "./contact-form"
import { PropsWithChildren } from "react"

const  ContactDialog = (props:PropsWithChildren)=> {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {props.children}
      </DialogTrigger>
      <DialogContent className=" md:max-w-[600px] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Form</DialogTitle>
          <DialogDescription>
            Fill the form and get contact 
          </DialogDescription>
        </DialogHeader>
        <ContactForm/>
      </DialogContent>
    </Dialog>
  )
}

export default ContactDialog;