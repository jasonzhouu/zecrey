import {ContainerCenter} from "@/styles/globals";
import SecTitle from "@/components/title";
import {BackersStyle} from "./styles";
import CardDownload from "@/components/card/download";
import {DOWNLOAD_URL, EXPLORER_URL, GOOGLE_PLAY} from "@/config";

const downloadInfoArr = [
    {
        ico: "/static/svg/zecreyExtension.svg",
        title: "Zecrey Extension",
        description: "Serves as the entry point to Zecrey's ecosystem, providing users with a convenient gateway via web browsers such as Chrome, Brave, Edge, and others.",
        url: DOWNLOAD_URL
    },
    {
        ico: "/static/svg/zecreyMobile.svg",
        title: "Zecrey Mobile",
        description: "Portable, user-friendly way to access Zecrey ecosystem.",
        url: GOOGLE_PLAY
    },
    {
        ico: "/static/svg/zecreyExplorer.svg",
        title: "Zecrey Webapp",
        description: "Works seamlessly with the extension and provides users with various web apps to access Zecrey's ecosystem.",
        url: ""
    }
]

export default function Ecosystem() {

    return (
        <BackersStyle>
            <ContainerCenter className={'container'}>
                <SecTitle title={'Ecosystem'} description={'Zecrey Ecosystem'} />
                <div className={'content'}>
                    {downloadInfoArr.map((item, index) => {
                        return <CardDownload url={item.url} key={index} index={index} ico={item.ico} title={item.title} description={item.description}
                                      />
                    })}
                </div>
            </ContainerCenter>
        </BackersStyle>
    );
};
