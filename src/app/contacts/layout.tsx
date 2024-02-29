import { ReactNode } from "react";

import { Metadata } from "next";

import { getBlogPage } from "@/src/app/[locale]/blog/(blog)/api/GetBlogPage";
import { defaultSiteName } from "@/src/const";
import { ProjectLocale } from "@/src/const/lang";
import { ogImage, updateOptionsIfExist } from "@/src/helpers/seo";
import { ClientTranslations } from "@/src/shared/components/ClientTranslations";
import { Footer } from "@/src/shared/components/Footer";
import { Header } from "@/src/shared/components/Header";

export interface ContactsLayout {
    children: ReactNode
}
export default async function ContactsLayout({ children, params: { locale } }: ContactsLayout) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
