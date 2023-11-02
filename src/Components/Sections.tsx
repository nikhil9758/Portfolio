import React, { forwardRef } from 'react'

interface sectionprop{
    id:string,
    children: React.ReactNode
}
const Sections= forwardRef<HTMLElement,sectionprop>((props,ref) => {
  return (
    <section ref={ref} id={props.id}>
            {props.children}
    </section>
  )
})

export default Sections