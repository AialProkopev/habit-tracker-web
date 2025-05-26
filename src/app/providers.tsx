import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode | ReactNode[];
}

export default function Providers({ children }: ProvidersProps) {
  return <>{children}</>;
}
