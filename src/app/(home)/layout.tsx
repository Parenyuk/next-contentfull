import {ReactNode} from "react";
import {Header} from "@/src/shared/components/Header";


type HomeProps = {
    children: ReactNode;
}

export default function LocaleLayout({ children }: HomeProps) {
    return (
        <>
            <Header />
            {children}
            {/*<Footer />*/}
        </>
    )
}
