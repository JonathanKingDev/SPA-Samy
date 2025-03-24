import { HeaderContainer } from "@/core/ui/header";

export default function HeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderContainer />
      {children}
    </>
  );
}
