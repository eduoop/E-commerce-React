import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'

type Props= {
    to: string;
    Name: string;
}

export const Link = ({ Name, to }: Props) => {


    console.log(to)

    return (
        <NavLink
            to={to}
            className={({ isActive }) => (isActive ? `${styles.home_container_active_item}` : `${styles.home_container_inactive_item}`)}
        >
            <p style={{ fontFamily: "Poppins" }}>{Name}</p>
        </NavLink>
    )
}
