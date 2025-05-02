import styled from "styled-components";

const Card = ({
  photo = "",
  name = "Dodi Firmansyah",
  title = "Fullstack dev & UX UI",
  socialLinks = {
    instagram: "#",
    x: "#",
    tiktok: "#",
  },
}) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div
          className="card-photo rounded-2xl bg-position-50 bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${photo})` }}
        ></div>
        <div className="card-title">
          {name} <br />
          <span>{title}</span>
        </div>
        <div className="card-socials">
          <div className="buttonsContainer">
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                className="socialContainer containerOne"
              >
                <svg viewBox="0 0 16 16" className="socialSvg instagramSvg">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
            )}
            {socialLinks.x && (
              <a href={socialLinks.x} className="socialContainer containerTwo">
                <svg
                  className="socialSvg size-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
                  ></path>
                </svg>
              </a>
            )}
            {socialLinks.tiktok && (
              <a
                href={socialLinks.tiktok}
                className="socialContainer containerThree"
              >
                <svg
                  className="socialSvg size-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
                  ></path>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    --font-color: #323232;
    --font-color-sub: #666;
    --bg-color: #fff;
    --main-color: #323232;
    width: 200px;
    height: 259px;
    background: var(--bg-color);
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .card-photo {
    transform: scale(0.3) translate(210px, 200px);
    transition: 0.5s ease-in-out;
    width: 300px;
    height: 260px;
    margin-left: -125px;
    margin-top: -125px;
    background-repeat: no-repeat;
  }

  .card-photo img {
    width: 100%;
    height: 150%;
    object-fit: cover;
  }

  .card-title {
    text-align: center;
    color: var(--font-color);
    font-size: 20px;
    font-weight: 400;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }

  .card-title span {
    font-size: 15px;
    color: var(--font-color-sub);
  }

  .card-socials {
    display: flex;
    height: 0;
    opacity: 0;
    margin-top: 10px;
    gap: 20px;
    transition: 0.5s;
  }

  .card:hover > .card-socials {
    opacity: 1;
    height: 60px;
  }

  .card:hover > .card-photo {
    transition: 0.3s;
    transform: scale(0.4) translate(160px, 140px);
  }

  .buttonsContainer {
    width: fit-content;
    height: fit-content;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  /* for all social containers*/
  .socialContainer {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background-color: rgb(44, 44, 44);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition-duration: 1s;
  }
  /* instagram*/
  .containerOne:hover {
    background-color: #d62976;
    transition-duration: 0.3s;
  }
  /* Twitter (X) */
  .containerTwo:hover {
    background-color: #00acee;
    transition-duration: 0.3s;
  }

  /* TikTok */
  .containerThree:hover {
    background-color: #010101;
    transition-duration: 0.3s;
  }
  .socialContainer:active {
    transform: scale(0.9);
    transition-duration: 0.3s;
  }

  .socialSvg {
    width: 17px;
  }

  .socialSvg path {
    fill: rgb(255, 255, 255);
  }

  .socialContainer:hover .socialSvg {
    animation: slide-in-top 0.3s both;
  }

  @keyframes slide-in-top {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export default Card;