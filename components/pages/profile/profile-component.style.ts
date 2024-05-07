import css from 'styled-jsx/css';

export const styles = css`
  .profile-section {
    margin-top: 40px;

    .profile-contents {
      display: flex;
      // align-items: center;
      flex-direction: column;

      .profile-photo {
        margin-left: 30px;
        margin-top: 20px;
        align-items: center;
        display: flex;
        justify-content: center;
        flex-direction: column;

        .profile-name {
          margin-top: 7px;
        }
      }

      .profile-biography {
        margin-top: 20px;

        .profile-biography-row {
          border-bottom: solid 1px lightgray;
          padding: 10px 15px;

          .profile-biography-year {
            margin-right: 20px;
          }
        }
      }
    }
  }

  .skill-section {
    margin-top: 100px;
  }

  .section-title {
    margin-left: 12.5px;
  }
`;
