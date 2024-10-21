import { JobCard } from "@/components/JobCard";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function Home() {
  return (
      <main>
        <section className="p-6 bg-gradient-to-br from-blue-100 via-blue-50 to-purple-100 rounded-lg max-w-6xl mx-auto shadow-lg">
          <h1 className="font-semibold text-2xl">
            ¡Hey reclutador, encuentra el siguiente talento para tu equipo!    
          </h1>
          <div className="mt-10 max-w-[90%] flex flex-col gap-2 ">
    
            <p>
              Sabemos que encontrar el talento adecuado puede ser un reto, por eso Talent Campus es la solución perfecta para ti.
            </p>
    
            <p>
              Talent Campus es una plataforma que te permite encontrar a los mejores talentos egresados del campus, con habilidades en diferentes áreas como: diseño, programación, marketing, contabilidad, entre otros.
            </p>
          </div>
        </section>

       <div className="max-w-5xl mx-auto">
          <section className="flex items-center my-8 ">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Encuentra un talento"
                className="pl-10 pr-4 py-2 w-full rounded-l-full rounded-r-none border-r-0 outline-none bg-white"
              />
            </div>
            <Button className="rounded-l-none rounded-r-full bg-blue-600 hover:bg-blue-700">
              Buscar
            </Button>
          </section>
  
          <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 ">
            <JobCard
              title="Frontend Developer"
              experience="Developer, design, frontend"
              description="We are looking for a frontend developer to join our team"
              timePosted="2 days ago"
            />
            <JobCard
              title="Frontend Developer"
              experience="Developer, design, frontend"
              description="We are looking for a frontend developer to join our team"
              timePosted="2 days ago"
            />
            <JobCard
              title="Frontend Developer"
              experience="Developer, design, frontend"
              description="We are looking for a frontend developer to join our team"
              timePosted="2 days ago"
            />
            <JobCard
              title="Frontend Developer"
              experience="Developer, design, frontend"
              description="We are looking for a frontend developer to join our team"
              timePosted="2 days ago"
            />
            <JobCard
              title="Frontend Developer"
              experience="Developer, design, frontend"
              description="We are looking for a frontend developer to join our team"
              timePosted="2 days ago"
            />
            <JobCard
              title="Frontend Developer"
              experience="Developer, design, frontend"
              description="We are looking for a frontend developer to join our team"
              timePosted="2 days ago"
            />
            <JobCard
              title="Frontend Developer"
              experience="Developer, design, frontend"
              description="We are looking for a frontend developer to join our team"
              timePosted="2 days ago"
            />
            <JobCard
              title="Frontend Developer"
              experience="Developer, design, frontend"
              description="We are looking for a frontend developer to join our team"
              timePosted="2 days ago"
            />
            <JobCard
              title="Frontend Developer"
              experience="Developer, design, frontend"
              description="We are looking for a frontend developer to join our team"
              timePosted="2 days ago"
            />
            <JobCard
              title="Frontend Developer"
              experience="Developer, design, frontend"
              description="We are looking for a frontend developer to join our team"
              timePosted="2 days ago"
            />
            <JobCard
              title="Frontend Developer"
              experience="Developer, design, frontend"
              description="We are looking for a frontend developer to join our team"
              timePosted="2 days ago"
            />
            <JobCard
              title="Frontend Developer"
              experience="Developer, design, frontend"
              description="We are looking for a frontend developer to join our team"
              timePosted="2 days ago"
            />
            <JobCard
              title="Frontend Developer"
              experience="Developer, design, frontend"
              description="We are looking for a frontend developer to join our team"
              timePosted="2 days ago"
            />
            <JobCard
              title="Frontend Developer"
              experience="Developer, design, frontend"
              description="We are looking for a frontend developer to join our team"
              timePosted="2 days ago"
            />
            <JobCard
              title="Frontend Developer"
              experience="Developer, design, frontend"
              description="We are looking for a frontend developer to join our team"
              timePosted="2 days ago"
            />
            <JobCard
              title="Frontend Developer"
              experience="Developer, design, frontend"
              description="We are looking for a frontend developer to join our team"
              timePosted="2 days ago"
            />
            <JobCard
              title="Frontend Developer"
              experience="Developer, design, frontend"
              description="We are looking for a frontend developer to join our team"
              timePosted="2 days ago"
            />
            <JobCard
              title="Frontend Developer"
              experience="Developer, design, frontend"
              description="We are looking for a frontend developer to join our team"
              timePosted="2 days ago"
            />
            <JobCard
              title="Frontend Developer"
              experience="Developer, design, frontend"
              description="We are looking for a frontend developer to join our team"
              timePosted="2 days ago"
            />
            <JobCard
              title="Frontend Developer"
              experience="Developer, design, frontend"
              description="We are looking for a frontend developer to join our team"
              timePosted="2 days ago"
            />
           
     
          </section>
       </div>
      </main>
  );
}

