import { ArrowUp } from "lucide-react"


export const Footer = () =>{

    return (
        <footer className="py-6 px-2 bg-card relative border-t border-border mt-6 pt-4 flex flex-wrap justify-between">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()}</p>
            <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:pg-primary/20">
                <ArrowUp />
            </a>
        </footer>
    )

}