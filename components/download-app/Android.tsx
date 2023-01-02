import ImgBox from "components/common/img";
import { AndroidWrap, Card, Info } from "./styles";
import QR from "icons/QR.svg";
import { CenterFlex } from "styles/globals";
import QRCode from "react-qr-code";
import { APK_URL, GOOGLE_PLAY } from "config";

const Android = () => {
  return (
    <Card>
      <AndroidWrap className="android">
        <ImgBox
          className="app"
          src="https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1667450678/mobile-app-all.png"
          alt=""
          width={330}
          height={466}
          fit="contain"
        />
        <Info top="8.2rem" left="60.4rem">
          <div className="title">
            <div className="main">Zecrey Mobile(Beta) for Android</div>
            <div className="sub" style={{ paddingBottom: "3.4rem" }}>
              Easily manage two-layers assets, even NFTs.
            </div>
          </div>
          <div className="divider" />
          <div
            className="details"
            style={{ paddingTop: "1.2rem", height: "20.8rem" }}
          >
            <span>Size: 59.7M</span>
            <span>Version: Zecrey for Android V 1.0.8 Beta (100801)</span>
            <span>OS: Android 6.0</span>
            <span>Updated at: 01-02-2023</span>
            <span className="faucet">
              Claim testnet tokens via the:{" "}
              <a
                href={"https://testnet.bnbchain.org/faucet-smart"}
                target="_blank"
                rel="noreferrer"
              >
                BNB Chain Testnet Faucet
              </a>
            </span>
            {/* <span className="muted">
              (The Google Glay version is under review now, please download the
              apk file.)
            </span> */}
          </div>
          <div className="divider" />
          <div className="logos">
            <a href={GOOGLE_PLAY}>
              {/* <a className="disabled"> */}
              <ImgBox
                src="https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1667447413/Google_Play_Badge_US.png"
                alt=""
                width={135}
                height={40}
              />
            </a>
            <a href={APK_URL}>
              <ImgBox
                src="https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1667447508/apk-file.png"
                alt=""
                width={137}
                height={41}
              />
            </a>
          </div>
        </Info>
        {global.window !== undefined && (
          <CenterFlex className="qr-button">
            <QR />
            <div className="hover-up">
              <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={`${global.window.location.origin}/download?os=android`}
                viewBox={`0 0 256 256`}
              />
              <div className="text">
                Scan to <br />
                Download
              </div>
            </div>
          </CenterFlex>
        )}
      </AndroidWrap>
    </Card>
  );
};

export default Android;
