import Image from "next/image"

export function FormWrapper({
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      {children}
      <div className="hidden bg-sky-1 p-5 lg:block">
        <Image
          src="/static/form-side-background.png"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
