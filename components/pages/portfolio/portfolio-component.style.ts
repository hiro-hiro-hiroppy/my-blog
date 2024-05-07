import css from 'styled-jsx/css';

export const styles = css`
  .profile-section {
    margin-top: 40px;

    .profile-contents {
      display: flex;
      align-items: center;

      .profile-biography {
        .profile-biography-row {
          border-bottom: solid 1px lightgray;
          padding: 10px 15px;

          .profile-biography-year {
            margin-right: 20px;
          }
        }
      }

      .profile-photo {
        margin-left: 30px;
        margin-top: 20px;
      }
    }
  }

  .skill-section {
    margin-top: 100px;
  }
`;
