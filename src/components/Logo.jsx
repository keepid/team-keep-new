import LogoColor from './../images/logos/logoColor.svg'
import Image from 'next/image'

export function Logo(props) {
  return <Image src={LogoColor} alt="Team Keep" {...props} />
}
