import Image from "next/image";
import logo from "../public/images/logo-red.svg";

export default function MainNavbar() {
  return (
    <nav className="py-5 bg-white shadow-md text-center">
      <Image src={logo} alt="Tribute logo red" width={170} height={46} />
    </nav>
  );
}
