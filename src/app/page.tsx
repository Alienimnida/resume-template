import TemplateCard from "@/components/TemplateCard";

export default function LandingPage() {
  const templates = [
    {
      imageSrc: "/template-1.png",
      title: "Classic Template",
      description: "A traditional resume layout perfect for corporate and business professionals.",
      link: "/page-one",
    },
    {
      imageSrc: "/template-2.png",
      title: "Modern Template",
      description: "A contemporary design featuring a clean and minimalist layout.",
      link: "/page-two",
    },
    {
      imageSrc: "/contemporary.png",
      title: "Contemporary Template",
      description: "A modern and stylish design with a professional touch.",
      link: "/contemporary",
    },
    {
      imageSrc: "/timeline.png",
      title: "Timeline Template",
      description: "A unique resume layout with a timeline for showcasing your work history.",
      link: "/timeline",
    },
    {
      imageSrc: "/ivy_league.png",
      title: "Ivy League Template",
      description: "A sophisticated and elegant design inspired by Ivy League universities.",
      link: "/ivy-league",
    },
    {
      imageSrc: "/double_column.png",
      title: "Double Column Template",
      description: "A two-column resume layout for highlighting your skills and experience.",
      link: "/double-column",
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0C2340] to-[#1E3A5F]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Professional Resume Templates
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {templates.map((template, index) => (
            <TemplateCard
              key={index}
              imageSrc={template.imageSrc}
              title={template.title}
              description={template.description}
              link={template.link}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
