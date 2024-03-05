import { ContainerComponent } from "@/src/shared/components/ContainerComponent";
import Link from "next/link";
import { headerRoutes } from "@/src/shared/const /routes";
import styles from './HeaderDesktop.module.scss';
import Image from 'next/image';
import Logo from '@/public/assets/png/Logo-2.png';

type ComponentType = {

}

export const HeaderDesktop = ({}: ComponentType) => {
    return (<header >
        <ContainerComponent className={styles.header}>
            <ul className={styles.linksGroup}>
                {
                    headerRoutes().map((item, index) => {
                        return (
                            <li key={index}>
                                <Link href={item.path}  className={styles.link}>
                                    {item.label}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            {/*<Image src={Logo} width={180} height={80} alt={'logo'} />*/}
        </ContainerComponent>
    </header>)
};
