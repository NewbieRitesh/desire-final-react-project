const HomeProp = (props) => {
    return (
        <>
            <div className="backdrop-blur-sm rounded-lg m-2 p-4 flex flex-col justify-center items-center border max-w-xs text-white">
                <div className="flex w-full">
                <img src={props.img} className="h-24 rounded-lg mr-2" alt={props.alt} />
                <h1 >{props.title}</h1>
                </div>

                <p className="">{props.p}</p>
                <button className="border rounded-full px-4 py-1 my-2">{props.button}</button>
            </div>
        </>
    )
}
export default HomeProp