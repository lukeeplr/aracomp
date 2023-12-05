import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { RiLogoutBoxLine } from "react-icons/ri";

export default function Home() {

  const user = 'Javier'
  

  if (user) {
    return (
      <main className="flex justify-center items-center w-full min-h-[100vh]">
        <section className="flex flex-col gap-3 w-[50%] h-[50%] m-auto">
        <div className="self-center">
        <Image 
          alt="logo aracomp"
          src={'/assets/logo.svg'}
          width={720}
          height={420}
          />
        </div> 
  
        <div className="flex flex-col justify-center items-center">
        <p>
          Parabéns 
          <span className="text-[#4361EE] ml-2">
            {user}
          </span>,
          </p>
          <p>Login realizado com sucesso</p>
        </div>
  
        <Button icon={<RiLogoutBoxLine />} type="Logout">
          <Link href={'/login'}>
          Sair da conta
          </Link>

        </Button>
        </section>
  
      </main>
    )
  } else {
    redirect('/login')
  }

  
}
