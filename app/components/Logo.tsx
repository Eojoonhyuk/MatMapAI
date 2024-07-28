import Image from "next/image";

export const Logo = () => {
  return (
    <>
      <Image src="/logo/logo.png" alt="logo" width={250} height={200}></Image>
    </>
  );
};
