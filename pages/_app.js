import "../styles/globals.css";
import { Web3Modal } from "@web3modal/react";

const config = {
    projectId: "PROJECT ID",
    theme: "dark",
    accentColor: "default",
    ethereum: {
        appName: "web3Modal",
    },
};

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <Web3Modal config={config} />
        </>
    );
}

export default MyApp;
