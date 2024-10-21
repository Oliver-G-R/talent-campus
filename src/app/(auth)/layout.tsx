import { ScrollArea } from "@/components/ui/scroll-area"
import { University } from "lucide-react"

interface LayoutProps {
  children: React.ReactNode
}


export default function AccountLayout({ children }: LayoutProps) {
  return (
    <div className="flex gap-2">
     
      <ScrollArea className="flex-1 h-screen">{children}</ScrollArea>

      <section className="flex justify-end flex-col h-screen w-4/6 relative bg-[url(/images/student.jpg)] bg-no-repeat bg-center bg-cover p-8 max-lg:w-1/2 max-md:hidden">
        <div className="text-white flex flex-col gap-2">

            <h2 className="text-3xl font-semibold">
              ¿Buscas talento?
            </h2>
            <p className="font-bold">
              Sabemos que encontrar el talento adecuado puede ser un reto, por eso Talent Campus es la solución perfecta para ti.
            </p>
    
            <p className="font-bold">
              Encuentra a los mejores talentos egresados del campus, con habilidades en diferentes áreas como: diseño, programación, marketing, contabilidad, entre otros.
            </p>
        </div>

        <div className="mt-3 flex flex-wrap gap-4">
          <span className="text-white flex items-center gap-2 w-[250px] border rounded-md  p-2">
            <University  className="size-10 font-light"/>
            Alumnos certificados por el campus 
          </span>
          <span className="text-white flex items-center gap-2 w-[250px] border rounded-md  p-2">
            <University  className="size-10 font-light"/>
            Alumnos certificados por el campus 
          </span>
        </div>
      </section>
    </div>
  )
}