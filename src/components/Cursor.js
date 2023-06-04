import AnimatedCursor from "react-animated-cursor";

function Cursor (){
    return(
        <>
        <AnimatedCursor
              innerSize={10}
              outerSize={8}
              color="14, 164, 54"
              outerAlpha={0.2}
              innerScale={0.7}
              outerScale={10}
              clickables={[
                "a",
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                "label[for]",
                "select",
                "textarea",
                "img",
                "h1",
                "button",
                ".link",
              ]}
            />
        </>
    )
}

export default Cursor