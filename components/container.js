import Nav from "./nav"
import Head from "next/head"


const Container = (props) => {
    return(
        <div>
            <Head>
                <link rel="stylesheet" href='https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/litera/bootstrap.min.css'/>
            </Head>
            <Nav/>
            <div className="container p-4">
                {props.children}
            </div>
        </div>
    )
}

export default Container