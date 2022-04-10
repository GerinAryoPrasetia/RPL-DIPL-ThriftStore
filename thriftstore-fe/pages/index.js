import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Thrift Shop</title>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center"></main>
    </div>
  );
}
