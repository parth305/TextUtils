import Navbar from './Navbar'
let name="parth";
export default function FirstProgram(){
    return (
        <>
      <Navbar />
      <div className="container">
        <h1>Hey this is heading from {name}</h1>   {/*here anything writen in {} will be javascript*/ }
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio deserunt officiis aliquam perferendis, libero nisi magni maxime,
           ipsa iusto unde facere! Maiores ducimus inventore iusto fuga vitae molestiae quasi aperiam possimus quod.</p>
      </div>
    </>
    )
}