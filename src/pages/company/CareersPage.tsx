import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Heart } from "lucide-react";

const Careers = () => {
  const jobs = [
    {
      title: "Automation Engineer",
      department: "Engineering",
      location: "Bangkok, Thailand",
      type: "Full-time"
    },
    {
      title: "PLC Programmer",
      department: "Engineering",
      location: "Chonburi, Thailand",
      type: "Full-time"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-8">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>Careers</BreadcrumbItem>
      </Breadcrumb>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Be part of a team that's shaping the future of industrial automation
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Card className="text-center">
          <CardHeader>
            <Briefcase className="w-12 h-12 mx-auto text-primary mb-4" />
            <CardTitle>Growth Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Continuous learning and career advancement opportunities
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <Users className="w-12 h-12 mx-auto text-primary mb-4" />
            <CardTitle>Great Culture</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Collaborative and innovative work environment
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <Heart className="w-12 h-12 mx-auto text-primary mb-4" />
            <CardTitle>Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Competitive salary and comprehensive benefits package
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-6">Open Positions</h2>
      <div className="space-y-4">
        {jobs.map((job, index) => (
          <Card key={index}>
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <p className="text-muted-foreground">{job.department} · {job.location} · {job.type}</p>
              </div>
              <Button>Apply Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Careers;