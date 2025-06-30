
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@react-router/react";
import type { LinksFunction, LoaderFunction } from "@react-router/node";
import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';
import { messages as enMessages } from '../locales/en/messages';
import { messages as arMessages } from '../locales/ar/messages';
import "./globals.css";

// Load messages
i18n.load({
  en: enMessages,
  ar: arMessages,
});

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
  },
];

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const locale = url.searchParams.get('locale') || 'en';
  
  // Activate the locale
  i18n.activate(locale);
  
  return { locale };
};

export default function App() {
  const { locale } = useLoaderData<{ locale: string }>();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="font-inter antialiased">
        <I18nProvider i18n={i18n}>
          <div id="root">
            <Outlet />
          </div>
        </I18nProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
