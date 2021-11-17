/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'

const Footer = () => {
    return ( 
        <Footer>
            <div>
                <h1 className="about">
                    About Us
                </h1>
                <h2 className="aboutinfo">
                    This website is part of CS436 project created by XinoVac Group 
                    with an aim for Bangkok University students to reserve a meeting room in campus.
                </h2>
                <h3 className="member">
                    <Image src="/mem1.png" width={200} height={200}/>
                    <Image src="/mem2.png" width={160} height={200}/>
                    <Image src="/mem3.png" width={250} height={177}/>
                </h3>
                <h4 className="membername">
                    <p>Rachen Chaisri</p>
                    <p>Bunyapha Pokpunyapong</p>
                    <p>Puttarak Morrat</p>
                </h4>
            </div>
        </Footer>
    );
}
export default Footer;