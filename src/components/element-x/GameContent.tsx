function GameContent({image, text}: {image: string, text:string}) {
    return (
        <div className="mx-8 my-4 text-center basis-1 grow  md:basis-2/6 lg:basis-1">
            <div className="flex justify-center mb-4">
                <img className="w-16" src={image}/>
            </div>
            {text}
        </div>
    )
}

export default GameContent