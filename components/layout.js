import LeftMenu from "./leftMenu";
import Nav from "./nav";

export default function Layout ({children}){
return (
    <>
 
        <Nav/>
        <LeftMenu/>
        
        <main>{children}</main>
    </>
)
}