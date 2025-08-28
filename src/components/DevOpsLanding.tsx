import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cloud, 
  Code, 
  Shield, 
  Zap, 
  GitBranch, 
  Server,
  Mail,
  Phone,
  MapPin,
  ExternalLink
} from "lucide-react";
import heroImage from "@/assets/hero-devops.jpg";

const DevOpsLanding = () => {
  const services = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "AWS Cloud Architecture",
      description: "Expert design and implementation of scalable AWS solutions with deep cloud-native expertise"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Private Cloud (OpenStack)",
      description: "Expert OpenStack deployment and management across multiple versions for private cloud infrastructure"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Infrastructure as Code",
      description: "Terraform and AWS CloudFormation for infrastructure automation and management"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "CI/CD Pipelines",
      description: "Automated deployment pipelines with AWS CodePipeline, Jenkins, and GitLab CI"
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Kubernetes Orchestration", 
      description: "Advanced Kubernetes deployments, scaling, and management for containerized applications"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Monitoring & Logging",
      description: "Comprehensive observability with CloudWatch, Prometheus, Grafana, and ELK Stack"
    }
  ];

  const technologies = [
    "AWS", "Kubernetes", "Docker", "OpenStack", "Terraform", "AWS EKS", "AWS CloudFormation",
    "AWS CodePipeline", "AWS CloudWatch", "Prometheus", "Grafana", "ELK Stack", 
    "Jenkins", "GitLab CI", "GitHub Actions", "Helm", "Istio", "AWS Lambda",
    "EC2", "S3", "RDS", "VPC", "IAM", "C Programming", "Linux Kernel", "KVM", "Ansible"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            AWS Cloud Architect & Kubernetes Specialist
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Future-Ready
            <span className="gradient-text block">Infrastructure</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            From system kernel to cloud orchestration - a unique journey through every layer of modern infrastructure, 
            specializing in AWS cloud architecture, Kubernetes, and private cloud environments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="glow-effect group">
              Get Consultation
              <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Expertise</span> & Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive DevOps solutions tailored to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="card-hover bg-gradient-card border-border/40">
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 px-6 bg-secondary/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Technologies</span> & Tools
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Leveraging the latest tools and technologies to deliver robust solutions
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-sm py-2 px-4 bg-card/50 border border-border/40 hover:border-primary/40 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Building the <span className="gradient-text">Future</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                My unique journey: C programmer → Router/Switch programming → OpenStack engineer → 
                SRE → Infrastructure Engineer → DevOps Architect. Deep expertise from kernel level to cloud orchestration.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                This foundation gives me unmatched insight into every layer: Kernel → Linux → Virtualization → 
                Containers → Kubernetes. I architect solutions understanding the complete stack.
              </p>
              <Button className="glow-effect">
                Let's Connect
                <Mail className="ml-2 w-4 h-4" />
              </Button>
            </div>
            
            <Card className="bg-gradient-card border-border/40">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">Why Choose Me?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Started as C programmer - deep systems knowledge
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      OpenStack expert across multiple versions & deployments
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      AWS & Kubernetes certified professional
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Complete stack mastery: Kernel → Containers → Cloud
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="gradient-text">Transform</span> Your Infrastructure?
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Let's discuss how we can accelerate your DevOps journey and build scalable solutions together.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">hello@devopsarchitect.com</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">Available Worldwide</p>
            </div>
          </div>
          
          <Button size="lg" className="glow-effect">
            Schedule a Consultation
            <ExternalLink className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/40">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 DevOps Architect. Building the future, one deployment at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DevOpsLanding;