import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Users, Award, TrendingUp } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center gap-8 mb-8">
            <div className="w-20 h-32 bg-gradient-to-br from-red-800 to-red-900 rounded-lg shadow-lg animate-wave flex items-center justify-center text-yellow-400">
              <div className="text-center">
                <div className="text-3xl">⚔️</div>
                <div className="text-[10px] font-bold">INDIAN</div>
                <div className="text-[10px] font-bold">ARMY</div>
              </div>
            </div>
            <div className="w-20 h-32 flex flex-col rounded-lg shadow-lg overflow-hidden animate-wave">
              <div className="flex-1 bg-[#FF9933]"></div>
              <div className="flex-1 bg-white flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-[#000080] rounded-full"></div>
              </div>
              <div className="flex-1 bg-[#138808]"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            NCC Attendance Portal
          </h1>
          <p className="text-xl text-white/90 mb-2">National Cadet Corps</p>
          <p className="text-lg text-white/80 italic">Unity and Discipline</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {[
            { icon: Users, title: "Student Management", desc: "Comprehensive student records" },
            { icon: TrendingUp, title: "Attendance Tracking", desc: "Real-time attendance monitoring" },
            { icon: Award, title: "Certificates", desc: "Digital certificate issuance" },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center text-white hover:bg-white/20 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-white/80">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
            onClick={() => navigate("/login")}
          >
            <Shield className="w-5 h-5 mr-2" />
            Staff Login
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 border-2"
            onClick={() => navigate("/admin-login")}
          >
            Admin Portal
          </Button>
        </div>

        <div className="mt-12 text-center text-white/70 text-sm">
          <p>New to the portal? <button onClick={() => navigate("/register")} className="text-white underline hover:text-white/90">Register here</button></p>
        </div>
      </div>
    </div>
  );
};

export default Index;
