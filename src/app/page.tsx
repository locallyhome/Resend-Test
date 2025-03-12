import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <h1>Home</h1>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="email" />
        <button>SUBMIT</button>
      </div>
    </main>
  );
}
