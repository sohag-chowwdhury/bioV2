var style = {
    position: "fixed",
    left: "0",
    bottom: "0",
    width:"100%",
    background:"#000000"
}


function Footer({ children }) {
    return (
        <div className="">
            
            <div style={style}>
                
               <img className="rounded-3xl inset-0 h-full w-full object-cover" src="https://safarika-adeola.netlify.app/footer-pttrn.09157649.svg"></img>
            </div>
        </div>
    )
}

export default Footer