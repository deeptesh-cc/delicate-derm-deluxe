function SectionTitle({title, alignment="text-center", variant, extraclasses}) {

    const variantClass =
    variant === "light"
      ? "light"
      : variant === "dark"
      ? ""
      : ""; 
      
    return(
        <>
            <div className={`section-title ${alignment} ${variantClass} ${extraclasses}`}>
                            <h2>{title}</h2>
             </div> 
        </>
    )
}

export default SectionTitle