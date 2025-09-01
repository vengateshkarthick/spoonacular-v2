"use client"
import { FetchStatusContext } from "@hooks/useFetchStatus";
import { IFetchStatus } from "@utils/type";
import React, { useCallback, useState } from "react";

const initialFetchStatus = {
  isError: false,
  isLoading: false,
  isSuccess: false,
};

export function FetchStatusProvider({
  children,
}: React.PropsWithChildren) {
  const [status, setStatus] = useState<IFetchStatus>(initialFetchStatus);

  const updateStatus = useCallback((key: keyof IFetchStatus, flag: boolean) => {
    setStatus(() => ({
      ...initialFetchStatus,
      [key]: flag,
    }));
  }, []);

  const resetStatus = useCallback(() => {
    setStatus(() => initialFetchStatus);
  }, []);

  const value = React.useMemo(
    () => ({
      updateStatus,
      resetStatus,
      ...status,
    }),
    [status, updateStatus, setStatus]
  );

  return (
    <FetchStatusContext.Provider value={value}>
      {children}
    </FetchStatusContext.Provider>
  );
}
