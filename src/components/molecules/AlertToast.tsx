import toast, { Toaster, ToasterProps } from "react-hot-toast";

export const notify = {
  success: (message: string = "Success") => toast.success(message),
  error: (message: string = "Oops network error") => toast.error(message),
};

export function AlertToast({
  position = "bottom-right",
}: {
  position?: ToasterProps["position"];
}) {
  return (
    <Toaster
      position={position}
      reverseOrder={false}
      toastOptions={{
        duration: 2000,
        success: {
          style: {
            background: '#4ade8050',
            color: '#16a34a',
            padding: '0.5rem 4rem 0.5rem 1rem',
            fontWeight: 'bold'
          }
        },
        error:{
            style: {
              background: '#f8717150',
              color: '#dc2626',
              padding: '0.5rem 4rem 0.5rem 1rem',
              fontWeight: 'bold'
            }
        }
      }}
    />
  );
}
