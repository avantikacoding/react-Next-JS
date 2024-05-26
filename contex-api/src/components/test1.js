import { useContext } from "react"
import { ContextTest } from "../ context"


export default function Test1() {
const [value, setValue] = useContext(ContextTest)

  return (
    <div>{value}
    <button onClick={()=>setValue('bye')}>bye</button>
    </div>

  )
}
