interface Props {
    image:string
    alt:string
}
import styles from './styles.module.css'
export const LoginIcon = ({image,alt}:Props) => {
    return(
        <img src={image} alt={alt} />
    )
}