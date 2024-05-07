import css from 'styled-jsx/css';

export const styles = css`
  :global(.cm-blog-layout) {
    box-sizing: border-box;
    min-width: 320px;
    background: rgb(250, 250, 250);

    :global(.cm-blog-main) {
      margin: 0 auto;
      margin-top: 80px;
      width: 100%;
      min-height: calc(100vh - 150px);
      max-width: 960px;
    }
  }
`;
