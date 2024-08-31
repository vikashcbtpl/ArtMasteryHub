
"use client";

import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/quick-draw/show");
  };
  return (
    <main>
      <h1>home page</h1>
      <button onClick={handleClick}>click me</button>
    </main>
  );
};
export default Home;
