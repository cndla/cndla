import { NextIntlClientProvider } from 'next-intl';
import '../globals.css';
import { Roboto } from 'next/font/google';
import { getMessages } from 'next-intl/server';

export const metadata = {
    title: 'Cndla Collective',
    description:
        'Especialistas en marketing digital y estrategias creativas con enfoque global. Presencia en LATAM, USA y Europa. Impulsamos tu marca. ¡Contáctanos y descubre más!',
};

const roboto = Roboto({ subsets: ['latin'], weight: '400' });
export default async function RootLayout({ children, params: { locale } }) {
    const messages = await getMessages();
    return (
        <html className={roboto.className} lang={locale}>
            <NextIntlClientProvider messages={messages}>
                <body>
                    {children}
                    {/* <LenisScroller /> */}
                </body>
            </NextIntlClientProvider>
        </html>
    );
}
