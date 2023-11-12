function FooterLink({href, text}: {href:string, text:string}) {
    return (
        <a className="mx-8" href={href}>
            {text}
        </a>
    )
}

export default FooterLink