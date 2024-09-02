import { useState } from "react"

export default function Post({title, body}): React.JSX.Element {
    const [isOpen, setOpen] = useState<boolean>(false)
    
    return (
        // event propagates
        <div className="tooltip" onClick={() => setOpen(!isOpen)}>
            <h2> {title} </h2>
            
            {isOpen && 
            <div className="backdrop">
              
              <p className="content"> {body} </p>

            </div>}


        </div>
    )
}