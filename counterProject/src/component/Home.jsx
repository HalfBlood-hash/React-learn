import Card from './Card'

function Home()
{
const arr =[{username:"satyam",btntext:"visit me"}, {username:"shivam",btntext:"Click me"}]
    return (
        <>
        {arr.map((item,index)=>(
            <Card key={index} username={item.username} btntext={item.btntext}/>
        ))}
        {/* <Card username="satyam" btntext="visit me"/>
        <Card username='satyam' btntext='Click me'/> */}
        
        </>
    )
}

export default Home