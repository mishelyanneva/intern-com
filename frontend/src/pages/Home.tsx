import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import { useState } from "react";
import Pic from "@/assets/Pic.svg";
import SignUp from "@/assets/SignUp.svg";
type Path = "/" | "/contactus";

const Home = () => {
  const [currentPath, setCurrentPath] = useState<Path>("/");

  const handleNavigate = (path: Path) => {
    setCurrentPath(path);
  };

  const HomePage = () => (
    <div className="flex flex-col">
      <section className="container mx-auto px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold">
              Shape the Future: <br />
              <span className="text-green-600"> Apply for Internships </span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-lg">
              Discover your potential. Gain hands-on experience with industry leaders. Unlock your
              creativity.
            </p>
            <div className="flex gap-4 pt-4">
              <Button variant="default" className="px-8 py-6">
                Get Started
              </Button>
              <Button variant="outline" className="px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <img
              src={Pic}
              alt="Internship opportunities"
              className="w-full h-auto rounded-lg justify-center"
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex-1 md:order-2">
              <h2 className="text-3xl font-bold mb-8 text-center">Get Started Today</h2>
              <p className="text-gray-600 text-lg mb-8 text-center max-w-2xl mx-auto">
                Sign up now and take the first step towards your future. Create a profile, browse
                opportunities, and apply to internships that excite you. Your dream career is just
                an internship away!
              </p>
              <div className="flex justify-center">
                <Button variant="default" className="px-8 py-6">
                  Sign Up Now
                </Button>
              </div>
            </div>
            <div className="flex-1 md:order-1">
              <img src={SignUp} alt="Image description" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Create a Profile",
                description:
                  "Sign up and fill in your details, including your education, skills, and career interests.",
              },
              {
                title: "Browse Internships",
                description:
                  "Explore a variety of internship listings tailored to your preferences.",
              },
              {
                title: "Apply Easily",
                description: "Submit your application to multiple internships with one click.",
              },
              {
                title: "Get Matched",
                description:
                  "Our algorithm matches you with the best opportunities based on your profile.",
              },
              {
                title: "Track Applications",
                description:
                  "Monitor the status of your applications in real-time and receive updates.",
              },
              {
                title: "Start Your Journey",
                description: "Begin your internship and start gaining valuable experience.",
              },
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Interns Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 border border-gray-200 rounded-lg">
              <p className="text-gray-600">
                "Thanks to this platform, I landed an amazing internship that kickstarted my career
                in digital marketing!"
              </p>
              <p className="font-bold mt-2">Emily, Marketing Intern</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <p className="text-gray-600">
                "The personalized matches made it so much easier to find the right internship for
                me. I highly recommend it to anyone looking for internships."
              </p>
              <p className="font-bold mt-2">John, Software Engineering Intern</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <p className="text-gray-600">
                "Exploring international internships through this platform allowed me to experience
                new cultures while gaining professional skills."
              </p>
              <p className="font-bold mt-2">Maria, Finance Intern</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );

  const renderContent = () => {
    switch (currentPath) {
      case "/":
        return <HomePage />;
      case "/contactus":
        return <div>Contact Us Page</div>;
      default:
        return <div>404 Not Found</div>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPath={currentPath} onNavigate={handleNavigate} />
      <main className="flex-1">{renderContent()}</main>
    </div>
  );
};

export { Home };
