import FormLogin from "@/components/FormLogin";
import Image from "next/image";

export default function Page() {

    return (
    <section className="flex items-center justify-center gap-48 h-[800px]">
        <FormLogin />
        <Image  
          src={'/assets/logo.svg'}
          width={420}
          height={460}
          alt="logotipo aracomp"
          />
      </section>
    )
}
