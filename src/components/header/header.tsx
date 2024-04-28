import './header.scss'
import male from '../../../public/icons/male.png'
import Image from 'next/image';


export default function Header() {
    return (
        <div className='container'>
            <div>
                <Image src={male} alt="My Image" className='profile-img' />
            </div>
        </div>
    );
}