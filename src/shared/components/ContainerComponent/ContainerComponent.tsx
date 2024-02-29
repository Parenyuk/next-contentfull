import { ReactNode } from "react";

import cn from "classnames";

import styles from './ContainerComponent.module.scss'

type ContainerComponentType = {
    children: ReactNode;
    className?: string;
    tag?: any;
}
export const ContainerComponent = ({ children, className, tag }: ContainerComponentType) => {
    const Tag = tag || 'section';

    return (
        <Tag className={cn(styles.container, className)}>
            {children}
        </Tag>
    )
};
