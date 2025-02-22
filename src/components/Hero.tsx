
import { Link } from "react-router-dom";
import { Upload } from "lucide-react";

export const Hero = () => {
  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-up [animation-delay:200ms]">
          <div className="inline-flex items-center space-x-2 bg-primary-light px-4 py-2 rounded-full">
            <Upload size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Cloud-Powered Learning</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Ace your exams,{" "}
            <span className="text-primary italic">effortlessly</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl">
            Upload your notes, share knowledge, and excel in your studies with our intelligent learning platform.
          </p>
          <div className="flex items-center space-x-4">
            <Link
              to="/signup"
              className="px-8 py-3 font-medium text-white bg-primary rounded-lg hover:bg-primary-hover transition-all duration-200 transform hover:scale-105"
            >
              Sign Up Now
            </Link>
            <Link
              to="/learn-more"
              className="px-8 py-3 font-medium text-primary bg-primary-light rounded-lg hover:bg-opacity-80 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="relative animate-fade-up [animation-delay:400ms]">
          <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent pointer-events-none" />
          <img
            src="/lovable-uploads/fcff317d-28cc-4918-b22d-9da4ed696978.png"
            alt="AceNotes Features"
            className="w-full h-auto animate-float"
          />
        </div>
      </div>
    </div>
  );
};
