const Buttonblue = ({caption, handleClick}) => {
    return(
        <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-3 px-4 rounded">
            {caption}
        </button>
    )
}

export default Buttonblue