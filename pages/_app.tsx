import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/reset.min.css';

export default function App({ Component, pageProps }: AppProps) {
  type pageTitleType = {
    path: string;
    title: string;
  };

  const blogName = "Hiro's Blog";

  const pageTitles: pageTitleType[] = [
    { path: '/', title: blogName },
    { path: '/profile', title: `プロフィール - ${blogName}` },
    { path: '/portfolio', title: `ポートフォリオ - ${blogName}` },
    { path: '/link', title: `リンク集 - ${blogName}` }
  ];

  const selectPageTItle = (): string => {
    const path = process.browser ? location.pathname : '';
    const pageTitle = pageTitles.find((e) => e.path === path)?.title;
    return pageTitle ?? blogName;
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon/favicon.ico" />
        <title>{selectPageTItle()}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

