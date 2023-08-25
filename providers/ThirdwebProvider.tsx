'use client';

import { ThirdwebProvider } from '@thirdweb-dev/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThirdwebProvider activeChain="mumbai">{children}</ThirdwebProvider>;
}
