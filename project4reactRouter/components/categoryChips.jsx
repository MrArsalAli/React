

function CategoryChips({ category, isChosen, onClick }) {
    const { name } = category;
    return (
        <div
            onClick={onClick}
            className={`${isChosen ? "bg-blue-300 text-white" : "bg-white text-black"}
        p-2 px-4 rounded-md border-blue-300 cursor-pointer hover:bg-blue-300 border`}>
            <h1>{name}</h1>
        </div>
    )
}



export default CategoryChips;