import css from 'styled-jsx/css';

export const styles = css`
  :global(.cm-blog-header) {
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-width: 320px;
    height: 80px;
    position: fixed;
    border-bottom: 1px solid #d9d9d9;
    z-index: 100;

    .cm-blog-header-title {
      display: flex;
      justify-content: center;
      align-items: center;

      .cm-blog-header-title-text {
        margin-left: 10px;
        width: 150px;
        font-size: 28px;
      }
    }

    .cm-blog-header-between {
      width: 100%;
    }

    .cm-blog-header-nav {
      
      ul.cm-blog-header-nav-ul {
        display: flex;

        li {
          list-style-type: none;
          margin: 0px 10px;
          font-weight: bold;

          a {
            color: #5a5a5a !important;
            position: relative;
            text-decoration: none;
            transition: 0.3s;
            font-size: 16px;
          }
          a::before{
            content: "";
            position: absolute;
            left: 0;
            bottom: -2px;
            width: 0;
            height: 2px;
            background: #5a5a5a;
            transition: 0.3s;
          }
          a:hover::before{
            width: 100%;
          
        }
      }
    }
  }
`;
