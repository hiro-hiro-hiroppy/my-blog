import {
  CloseOutlined,
  DownOutlined,
  MenuOutlined
} from '@ant-design/icons/lib/icons';
import { Dropdown, Layout, MenuProps, Space } from 'antd/lib';
import Link from 'next/link';
import { useState } from 'react';
import useMedia from 'use-media';
import CmImage from '../../parts/cm-image';
import { styles } from './cm-blog-header.style';
import { mediaQuery, useMediaQuery } from '@/components/hooks/useMediaQuery';
const { Header } = Layout;

export default function CmBlogHeader() {
  const navPages = [
    {
      url: '/profile',
      pageName: 'Profile'
    },
    {
      url: '/portfolio',
      pageName: 'Portfolio'
    },
    // { url: '/service', pageName: 'Service' },
    { url: '/link', pageName: 'Link' }
  ];

  const items: MenuProps['items'] = [
    {
      // eslint-disable-next-line @next/next/no-html-link-for-pages
      label: <Link href="/profile">Profile</Link>,
      key: '0'
    },
    {
      // eslint-disable-next-line @next/next/no-html-link-for-pages
      label: <Link href="/portfolio">Portfolio</Link>,
      key: '1'
    },
    {
      // eslint-disable-next-line @next/next/no-html-link-for-pages
      label: <Link href="/link">Link</Link>,
      key: '2'
    }
  ];

  // const [isOpenSubMenu, setIsOpenSubMenu] = useState<boolean>(false);
  const isPc = useMedia({ minWidth: '960px' });
  const isTablet = useMedia({ minWidth: '520px' });

  let titleClassName = 'cm-blog-header-title';
  if (!isPc && isTablet) titleClassName += ' isTablet';
  if (!isPc && !isTablet) titleClassName += ' isSmartPhone';

  // const onClickSubMenuToggle = () => {
  //   if (!isOpenSubMenu) {
  //     setIsOpenSubMenu(true);
  //   } else {
  //     setIsOpenSubMenu(false);
  //   }
  // };

  return (
    <>
      <style jsx>{styles}</style>
      <Header className="cm-blog-header">
        <div className={titleClassName}>
          <CmImage
            src="/image/blog-header-elephant.svg"
            alt="象さん"
            width={40}
            preview={false}
          ></CmImage>
          <h3 className="cm-blog-header-title-text">{"Hiro's Blog"}</h3>
        </div>
        <div className="cm-blog-header-between"></div>
        {/* PC・タブレットの場合 */}
        {(isPc || isTablet) && (
          <nav className="cm-blog-header-nav">
            <ul className="cm-blog-header-nav-ul">
              {navPages.map((p) => (
                <li key={p.url} className="cm-blog-header-nav-li">
                  <Link href={p.url}>{p.pageName}</Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
        {/* スマホの場合 */}
        {!isTablet && (
          <div
            // onClick={onClickSubMenuToggle}
            className="cm-blog-header-navmenu"
          >
            <Dropdown menu={{ items }} trigger={['click']}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <MenuOutlined
                    style={{
                      fontSize: '24px',
                      color: 'gray',
                      marginTop: '24px',
                      cursor: 'pointer'
                    }}
                  />
                </Space>
              </a>
            </Dropdown>
          </div>
        )}
      </Header>
    </>
  );
}
