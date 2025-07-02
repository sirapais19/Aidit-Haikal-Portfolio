
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export const Certifications = () => {
  const certifications = [
    {
      title: "Getting Started with AI on Jetson Nano",
      issuer: "NVIDIA",
      link: "/lovable-uploads/file-H5s9oXFQoEm6oxokM5DTsr"
    },
    {
      title: "Building Video AI Applications at the Edge",
      issuer: "NVIDIA", 
      link: "/lovable-uploads/file-GajeGs6iLJPwRQdwYXuyp2"
    },
    {
      title: "CCNAv7: Introduction to Networks",
      issuer: "Cisco Networking Academy",
      link: "/lovable-uploads/file-23x1A4xGVE4EVqd77EpAfe"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certifications that validate my expertise in emerging technologies
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {cert.title}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  {cert.issuer}
                </p>
              </div>
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-all duration-300"
              >
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  View Certificate
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
