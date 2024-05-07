import Image from "next/image";
import Button from "./components/Button";

export default function Home() {
  return (
    <main className="container">
      <Button type={"primary"} />
      <Button type={"secondary"} />
      <Button type={"third"} />
      <Button type={"add_cart"} />
      <Button type={"checkout"} />
      <Button type={"back-top"} />
    </main>
  );
}
