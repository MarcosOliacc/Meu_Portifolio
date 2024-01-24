'use client'
import { useState, useEffect } from "react"
import { Courier_Prime } from "next/font/google"
const josefin = Courier_Prime({
    weight:'400',
    subsets: ['latin']
})
export function Welcome() {
    const [text, setText] = useState('_')
    const digits = 'Sejam todos bem vindos!'

    useEffect(()=> {
        const arr = digits.split('').reverse()

        const typer:any = setInterval(()=> {
            
            if(!arr.length) {
                const typer2:any = setInterval(()=> {
                    setText(state=>state.split('').slice(0,-1).join(''))
                    setTimeout(()=>{setText(state=>state + '_')},100)
                    
                },800)
                return clearInterval(typer)
                
            }
            if(text[text.length - 1]=== '_') {
                setText((state)=>state.split('').slice(0,-1).join(''))
            }
            const next = arr.pop() + '_'
            setText((state)=>state + next)
            
            
        },200)
    },[])
    return <>
        <p style={{fontSize:'2.2rem'}} className={josefin.className}>{text}</p>
    </>
}