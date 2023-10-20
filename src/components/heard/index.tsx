import React ,{memo}from "react"
import {FC,ReactNode} from "react"
interface IPorps{
    children?:ReactNode
}

//泛型约束
const Header:FC<IPorps> = (props)=>{
    return (
        <>
           Header
        </>
    )
}
export default memo(Header)