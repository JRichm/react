// react component for adding a new 'Note' on a specific day on the calendar


// details needed for note submission
//     note date
//     note title
//     note

export default function NewNote() {
    return (
        <>
            <form className="border border-solid border-black rounded my-5 p-2">
                <input type='text' placeholder='note title' className='border-none outline-none m-2' name='title' /*onChange={handleInputChange} value={formData.title} */></input>
                <hr />
                <textarea placeholder='new note' className='border-none outline-none m-2 resize-none' name="data" /* onChange={handleInput} value={formData.data} */></textarea>
                <span className='flex flex-row justify-between'>
                        <button className='hover:cursor-pointer bg-red-200 px-3 m-2 w-full rounded'>Cancel</button>
                        <input type="submit" value={"add"} className='hover:cursor-pointer bg-gray-200 px-3 m-2 w-full rounded'></input>
                </span>
            </form>
        </>
    )
}