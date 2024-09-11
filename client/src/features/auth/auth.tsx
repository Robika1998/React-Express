import { useCurrentQuery } from "../../app/serivices/auth";

export const Auth = ({ children }: { children: JSX.Element }) => {
  const { isLoading } = useCurrentQuery();

  if (isLoading) {
    return <span>Loading</span>;
  }

  return children;
};
