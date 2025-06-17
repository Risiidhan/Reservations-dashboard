"use client";

import { queries } from "@/lib/queries";
import { useStore, useUIStore } from "@/store";
import { useQuery } from "@tanstack/react-query";
import { FC, PropsWithChildren, useEffect } from "react";

const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const setUser = useStore((state) => state.setUser);
  const setLoading = useUIStore((state) => state.setLoading);
  const { data: user, isLoading } = useQuery(queries.getUser);

  useEffect(() => {
    if (user && !isLoading) {
      setUser(user);
    } else {
      setUser(null);
    }
  }, [user, isLoading, setUser]);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading, setLoading]);

  return <>{children}</>;
};

export default UserProvider;
