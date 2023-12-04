function ContentHeader({text}: {text:string}) {
    return (
        <div className="text-3xl  text-center mb-4 
                        lg:text-5xl lg:mb-12">
            {text}
        </div>
    )
}

export default ContentHeader