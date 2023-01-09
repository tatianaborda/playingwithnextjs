import Container from '../components/container'
import Users from '../components/users'
import Head from "next/head"
import _fetch from 'isomorphic-fetch'

const Index = (props) => {
    return(
        <div>
            <Head>
                <title>Next.js Project</title>
            </Head>
            <Container>
                <h1>Next</h1>
                <Users users={props.users}/>
            </Container>
        </div> 
    )
}

Index.getInitialProps = async (ctx) => {
    const res = await fetch('https://reqres.in/api/users')
    const json = await res.json()
    return {users: json.data}
  }
  

export default Index