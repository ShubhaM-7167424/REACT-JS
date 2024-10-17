import React from 'react'
import Image from './about/Image'
import Location from './about/Location'
import Price from './about/Price'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div className='about'>
        <h1>This is About Page</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, tempora, dicta dolores eveniet nihil at a veritatis recusandae quam maiores corrupti illo non id? Odio mollitia exercitationem dignissimos aspernatur temporibus?
        Nisi saepe impedit debitis dicta vitae architecto provident reprehenderit, nulla maxime ut odit recusandae, alias consequuntur est ipsa hic voluptas deleniti voluptate iste. Delectus error dicta porro sit sed modi!
        Eaque, assumenda illo! Ullam iste hic mollitia minima molestiae deserunt eveniet sit alias debitis non ea inventore repellendus explicabo libero facere dicta impedit cupiditate, adipisci autem labore at reiciendis fuga.
        Expedita animi blanditiis mollitia provident eveniet dicta id nulla nihil, esse, sit, quia repellendus molestias nemo omnis error? Eligendi voluptate, eveniet repellat amet porro ipsam nulla sed earum architecto impedit?
        Qui, quidem. Illo tempore natus unde numquam! At quidem in officiis nesciunt aperiam tempora, eum reiciendis saepe beatae tenetur repellat nisi ut velit illum dignissimos earum architecto, rerum voluptatum exercitationem!
        </p>

        <ul>
          <li><Link to='/about/image'>Image</Link></li>
          <li><Link to='/about/location'>Location</Link></li>
          <li><Link to='/about/price'>Price</Link></li>
        </ul>
     
        <Outlet/>
    </div>
  )
}

export default About