import React, {useState} from 'react'

function FooterLinksMobile() {

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(0)

    const FAQsList = [
        {
            question: "How do I place an order?",
            answer: "1 Yes! We have a range of plant-based dishes on our menu — and we’re always adding more. Just look for the [V] and [VG] symbols when ordering."
        },
        {
            question: "Is all your food gluten-free?",
            answer: "2 Yes! We have a range of plant-based dishes on our menu — and we’re always adding more. Just look for the [V] and [VG] symbols when ordering."
        },
        {
            question: "Do you cater to dietary restrictions?",
            answer: "3 Yes! We have a range of plant-based dishes on our menu — and we’re always adding more. Just look for the [V] and [VG] symbols when ordering."
        },
        {
            question: "Do you serve vegan or vegetarian options?",
            answer: "Yes! We have a range of plant-based dishes on our menu — and we’re always adding more. Just look for the [V] and [VG] symbols when ordering."
        },
        {
            question: "Is the food made fresh?",
            answer: "5 Yes! We have a range of plant-based dishes on our menu — and we’re always adding more. Just look for the [V] and [VG] symbols when ordering."
        },
        {
            question: "Where is the food prepared?",
            answer: "All our meals are cooked in a dedicated off-site kitchen, using fresh, high-quality ingredients. This allows us to maintain strict hygiene standards, batch consistency, and prep food efficiently without compromising on flavour."
        },
        {
            question: "What kind of packaging do you use?",
            answer: "7 Yes! We have a range of plant-based dishes on our menu — and we’re always adding more. Just look for the [V] and [VG] symbols when ordering."
        },
        {
            question: "Can I reheat the food later?",
            answer: "8 Yes! We have a range of plant-based dishes on our menu — and we’re always adding more. Just look for the [V] and [VG] symbols when ordering."
        }
    ]

  return (
    <>
    <ul className='lg:w-200 flex flex-col space-y-2'>
        {FAQsList.map((listItem, i) => (
            <li className='cursor-pointer' onClick={() => setSelected(i)} >
                <div className='border-1 border-charcoal rounded-[12px] overflow-hidden'>
                    <div className={`flex items-center justify-between px-4 lg:px-5 py-3 ${selected==i? 'bg-charcoal' : 'bg-rice'}`}>
                        <h4 className={`text-[18px] lg:text-[24px] font-secondary font-semibold lg:font-medium text-xl tracking-wide ${selected==i? 'text-rice' : 'text-charcoal'}`}>{listItem.question}</h4>
                        {/* <img src={`/icons/${selected ? 'collapse.svg' : 'expand.svg'}`} alt="expand icon" /> */}
                    </div>
                    <div className={`${selected==i? 'px-4 lg:px-5 py-5 lg:py-6 opacity-100 max-h-100 cursor-auto' : 'opacity-0 max-h-0 overflow-hidden '} transition-all duration-400 ease-in-out`}>
                        <p className='text-charcoal/80 text-[16px] lg:text-[18px]'>{listItem.answer}</p>
                    </div>       
                </div>  
            </li>
        ))}
    </ul>
    </>
  )
}

export default FooterLinksMobile;