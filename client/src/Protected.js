import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Protected(props){
    const navigate=useNavigate()
    const {component}=props
    const token=localStorage.getItem('token')
    useEffect(() => {
      
        if(!token){
            navigate('/')
        }
      
    }, [])
    

    return(<>
    {component}
    </>)
}