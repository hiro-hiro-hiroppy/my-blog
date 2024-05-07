import { Footer } from 'antd/lib/layout/layout';
import { styles } from './cm-blog-footer.style';

export default function CmBlogFooter() {
  return (
    <>
      <style jsx>{styles}</style>
      <Footer className="cm-blog-footer">
        <div className="cm-blog-footer-text">@Hiro 2024</div>
      </Footer>
    </>
  );
}
