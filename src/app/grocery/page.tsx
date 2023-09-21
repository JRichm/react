import LeftNav from '@/components/nav'
import { prisma } from "@/db"
import { redirect } from "next/navigation"
import GroceryItem from '@/components/groceryItem'

function getGroceryItems() {
    return  prisma.groceryItem.findMany()
}

async function toggleItem(id: string, active: boolean) {
    "use server"

    await prisma.groceryItem.update({ where: { id }, data: { active } })

    redirect("/grocery")
}

async function addGroceryItem(data: FormData) {
    "use server"

    const itemName = data.get("itemInput")?.valueOf()

    if (typeof itemName !== "string" || itemName.length === 0) {
        throw new Error("Invalid Title")
    }

    await prisma.groceryItem.create({ data: { itemName, active: true } })

    redirect("/grocery")
}

export default async function Grocery() {
    const groceryItems = await getGroceryItems()
    const sortedList = groceryItems.filter((item) => item.active === true);
    console.log(sortedList)
    return(
        <>
            <div className='flex flex-row'>
                <LeftNav />
                <div className='m-12'>
                    <div>
                        <form action={addGroceryItem}>
                            <input name="itemInput" type="text" placeholder='+ add item'></input>
                            <hr></hr>
                        </form>
                    </div>
                    <div>
                        <ul>
                            {sortedList.map(item  => (
                                <GroceryItem key={item.id} {...item} toggleItem={toggleItem} />
                            ))}
                        </ul>
                        
                    {/* <ul className="pl-4">
                            {todos.map(todo => (
                                <ToDoItem key={todo.id} {...todo} toggleToDo={toggleToDo} />
                            ))}
                        </ul> */}
                    </div>
                </div>
            </div>
        </>
    )
}