import { useState } from 'react'

export function useThanks() { 
    const [open, setOpen] = useState(false);


    
    return { open, setOpen}
}