import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import NavBar from "./components/NavBar";
import { Container} from "react-bootstrap";
import FooterBar from "./components/FooterBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
        <NavBar></NavBar>
          <Container className="flex-grow-1 d-flex justify-content-center">
            <Component {...pageProps} />
          </Container>
        <FooterBar></FooterBar>
      </div>
    </>
  );
}
