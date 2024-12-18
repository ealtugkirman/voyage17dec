'use client'

import React, { useState } from 'react'

interface AccordionProps {
  items: {
    title: string
    content: React.ReactNode
  }[]
}

function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-7xl mx-auto">
      {items.map((item, index) => (
        <div key={index} className="border-t border-white/20">
          <button
            className="w-full text-left py-6 flex justify-between items-center text-xl"
            onClick={() => toggleItem(index)}
          >
            {item.title}
            <span className="text-2xl transition-transform duration-300">
              {openIndex === index ? '-' : '+'}
            </span>
          </button>
          <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="pb-6 text-gray-300">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion;