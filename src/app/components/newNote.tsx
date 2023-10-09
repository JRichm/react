import { useState } from 'react'
import { add_note } from 'crud';

export default function NewNote({ selectedDate }) {

    const [formData, setFormData] = useState({ title: '', note: '' })
    
    // handle user input
    function handleInputChange(e) {

        // update user input
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    function submitNewNote(e) {
        e.preventDefault()

        // create formData object
        const {title, note} = formData;
        const formDataObject = new FormData()
        formDataObject.append('title', title)
        formDataObject.append('note', note)

        // call crud to add note to database
        try {
            add_note(formDataObject, selectedDate)
        } catch (error) {
            console.log(error)
        }

        // reset  user input
        setFormData({title: '', note: ''})
    }

    return (
        <>
            <form className="border border-solid border-black rounded my-5 p-2" onSubmit={submitNewNote}>
                <input type='text' placeholder='note title' className='border-none outline-none m-2' name='title' onChange={handleInputChange} value={formData.title}></input>
                <hr />
                <textarea placeholder='new note' className='border-none outline-none m-2 resize-none' name="note" onChange={handleInputChange} value={formData.note}></textarea>
                <span className='flex flex-row justify-between'>
                        <button className='hover:cursor-pointer bg-red-200 px-3 m-2 w-full rounded'>Cancel</button>
                        <input type="submit" value={"add"} className='hover:cursor-pointer bg-gray-200 px-3 m-2 w-full rounded'></input>
                </span>
            </form>
            {/* add color buttons */}
        </>
    )
}