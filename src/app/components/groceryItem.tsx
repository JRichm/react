"use client"

type GroceryItemProps = {
    id: string
    itemName: string
    active: boolean
    toggleItem: (id: string, complete: boolean) => void
}

export default function GroceryItem({ id, itemName, active, toggleItem}: GroceryItemProps) {
    return (
        <>
            <li className='hover:text-gray-400 hover:cursor-pointer hover:line-through' onClick={e => toggleItem(id, false)}>{itemName} {active}</li>
        </>
    )
}