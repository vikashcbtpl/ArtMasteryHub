"use client";

import { useRouter } from "next/navigation";

//daily-sketch-practice

const Home = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/quick-draw");
  };
  const handleContactusClick = () => {
    router.push("/contactUs");
  };
  return (
    <main>
      <h1>home page</h1>
      <button onClick={handleClick}>click me</button>
      <br/>
      <button onClick={handleContactusClick}>ContactUs</button>
    </main>
  );
};
export default Home;
