import Head from "next/head"
import {Tip} from "../components/Tip"
import {Container} from "../components/Container"
// A Smart Component from Framer
import Toggle from "https://framer.com/m/Toggle-B5iT.js@X94mtocAj5XithxLESme"
import Friends from "../components/friend/Friends";
import useFriends from "../components/friend/useFriends";

export default function Home() {
    const {friends, setCount} = useFriends(2);
    return (
        <>
            <Head>
                <title>Framer</title>
                <meta name="description" content="Modules" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Friends friends={friends} />
            <Container>
                <Toggle onClick={() => setCount(friends.length + 1)} />
                <Tip />
            </Container>
        </>
    )
}
