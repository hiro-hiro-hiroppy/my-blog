import { Layout } from 'antd/lib';
import CmBlogFooter from './cm-blog-footer/cm-blog-footer';
import CmBlogHeader from './cm-blog-header/cm-blog-header';
import { styles } from './cm-blog-layout.style';

export default function CmBlogLayout({ className, children }: any) {
  const { Content } = Layout;

  return (
    <>
      <style jsx>{styles}</style>
      <Layout className="cm-blog-layout">
        <CmBlogHeader></CmBlogHeader>
        <Content className="cm-blog-main">
          <div className={className}>{children}</div>
        </Content>
        <CmBlogFooter></CmBlogFooter>
      </Layout>
    </>
  );
}
