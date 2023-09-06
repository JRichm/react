import LeftNav from '@/components/nav'

export default function Recipes() {
    return(
        <>
            <div className="flex flex-row align-center">
                <LeftNav />
                <div className="flex flex-col">
                    <h1>Recipes</h1>
                </div>
            </div>
        </>
    )
}