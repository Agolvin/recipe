import {
  QueryClient,
  QueryClientProvider as Provider,
} from "@tanstack/react-query";

export const queryClient = new QueryClient();

const QueryClientProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider client={queryClient}>{children}</Provider>;
};

export default QueryClientProvider;
