import Head from "next/head";
import { Inter } from "next/font/google";
import {Home} from "../components/Home/Home";


const inter = Inter({ subsets: ["latin"] });

export default function home() {
  return (
    <>
      <Head>
        <title>Abdul Kousara | Software Developer</title>

      </Head>
      <Home />
    </>
  );
} 
