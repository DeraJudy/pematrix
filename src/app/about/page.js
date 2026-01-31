import { FaEye } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";

export default function About() {
  return (
    <section>

      {/* About Title and Clients section */}
      <div className="flex justify-center items-center min-h-1/2 py-32 ">
        <div className="mx-auto max-w-7xl w-full flex md:justify-between mt-24  ">

          <div className="max-w-2xl pr-9">
            <h2
              style={{ color: "hsl(var(--foreground))" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              About
              <span
                style={{ color: "hsl(var(--primary))", }}
              > Pematrix</span>
            </h2>
            <p className="text-lg font-semibold">
              We are a team of passionate technologists, designers, and strategists dedicated to helping businesses thrive in the digital age.
            </p>
            <p
              style={{
                color: "hsl(var(--muted-foreground))",
              }}
              className="text-lg font-normal mt-5">
              Founded in 2016, Pematrix has grown from a small startup to a leading digital consulting firm. We combine deep technical expertise
              with creative thinking to deliver solutions that drive real business results.
            </p>
          </div>

          <div
            style={{
              borderColor: "hsl(var(--border))",
              backgroundColor: "hsl(var(--card) / 80%)",
            }}
            className=" grid grid-cols-2 gap-8 border-2 rounded-2xl px-20 py-5">
            <div className="px-9 py-3">
              <h4
                style={{ color: "hsl(var(--primary))" }}
                className=" text-4xl font-bold mb-2"
              >
                150+
              </h4>
              <span
                className="text-sm"
                style={{
                  color: "hsl(var(--muted-foreground))",
                }}
              >
                Projects Delivered</span>
            </div>
            <div className="px-9 py-3">
              <h4
                style={{ color: "hsl(var(--primary))" }}
                className=" text-4xl font-bold mb-2"
              >
                50+
              </h4>
              <span
                className="text-sm"
                style={{
                  color: "hsl(var(--muted-foreground))",
                }}
              >Happy Clients</span>
            </div>
            <div className="px-9 py-3">
              <h4
                style={{ color: "hsl(var(--primary))" }}
                className=" text-4xl font-bold mb-2"
              >
                10+
              </h4>
              <span
                className="text-sm"
                style={{
                  color: "hsl(var(--muted-foreground))",
                }}
              >
                Years of Experience
              </span>
            </div>
            <div className="px-9 py-3">
              <h4
                style={{ color: "hsl(var(--primary))" }}
                className=" text-4xl font-bold mb-2"
              >
                25+
              </h4>
              <span
                className="text-sm"
                style={{
                  color: "hsl(var(--muted-foreground))",
                }}
              >
                Team Members
              </span>
            </div>
          </div>

        </div>
      </div>

      <div 
        style={{
          backgroundColor: "hsl(var(--card) / 80%)",
        }}
      className="flex justify-center items-center min-h-1/2 py-28">
        <div className="mx-auto max-w-7xl w-full flex md:justify-between gap-10  ">

          <div 
            style={{
              backgroundColor: "hsl(var(--card) / 80%)",
              borderColor: "hsl(var(--border))",
            }}
            className="border-2 rounded-2xl px-7 py-10"
          >
            <div 
              style={{
                backgroundColor: "hsl(var(--primary) / 10%)",
              }}
              className="w-16 h-12 py-6 px-1 flex justify-center items-center rounded-2xl mb-6">
              <FiTarget size={28} style={{ color: "hsl(var(--primary))" }} />
            </div>
            <h2
              style={{ color: "hsl(var(--foreground))" }}
              className="text-2xl font-bold text-foreground mb-6"
            >
              Our Mission
            </h2>
            <p
              style={{
                color: "hsl(var(--muted-foreground))",
              }}
            >
              To empower businesses with innovative digital solutions that drive growth, 
              enhance efficiency, and create lasting competitive advantages in an ever-evolving technological landscape.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "hsl(var(--card) / 80%)",
              borderColor: "hsl(var(--border))",
            }}
            className="border-2 rounded-2xl px-7 py-10"
          >
             <div 
              style={{
                backgroundColor: "hsl(var(--primary) / 10%)",
              }}
              className="w-16 h-12 py-6 px-1 flex justify-center items-center rounded-2xl mb-6">
              <FaEye size={28} style={{ color: "hsl(var(--primary))" }} />
            </div>
            <h2
              style={{ color: "hsl(var(--foreground))" }}
              className="text-2xl font-bold text-foreground mb-6"
            >
              Our Vision
            </h2>
            <p
              style={{
                color: "hsl(var(--muted-foreground))",
              }}
            >
              To be the trusted partner of choice for businesses worldwide, recognized for our 
              excellence in delivering transformative digital experiences and sustainable technological solutions.
            </p>
          </div>
        </div>  
      </div>

    </section>
  );
}
