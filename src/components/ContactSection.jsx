import { Linkedin, Mail, MapPin, Phone } from "lucide-react"


export const ContactSection = () => {

    return (
        <section
            id="contact"
            className="py-24 px-24 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Reach out to me if you have any question
                </p>

                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>


                <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">

                    {/* Email */}
                    <div className="flex flex-col items-center gap-3">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-semibold">Email</h4>
                            <a
                                href="mailto:vydinh210921@gmail.com"
                                onClick={() => navigator.clipboard.writeText("vydinh210921@gmail.com")}
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                vydinh210921@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* LinkedIn */}
                    <div className="flex flex-col items-center gap-3">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Linkedin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-semibold">LinkedIn</h4>
                            <a
                                href="https://www.linkedin.com/in/vy-thi-thuy-dinh-4090251b7/"
                                target="_blank"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                View Profile
                            </a>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex flex-col items-center gap-3">
                        <div className="p-3 rounded-full bg-primary/10">
                            <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-semibold">Location</h4>
                            <p className="text-muted-foreground">San Jose, CA</p>
                        </div>
                    </div>

                </div>

            </div>


        </section>
    )

}