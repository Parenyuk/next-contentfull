import { ReactNode } from "react";

import { Header } from "@/src/shared/components/Header";

export type ContactsLayout = {
    children: ReactNode
}
export default async function ContactsLayout({ children }: ContactsLayout) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
