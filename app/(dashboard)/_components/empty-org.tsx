import Image from "next/image"
import { CreateOrganization } from "@clerk/nextjs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"


export const EmptyOrg = () => {
    return(
        <div className="h-full flex flex-col items-center justify-center">
            <Image
                src="/elements.svg"
                alt="Empty State"
                height= {200}
                width = {200}
            />

            <h2 className="text-2xl font-semibold mt-6">Welcome to CoSketch</h2>
            <p className="text-sm text-muted-foreground mt-2">
                Create or Join an organization to get started.
            </p>

            <div className="mt-6">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size = "lg">
                            Create Organization
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
                        <CreateOrganization />
                    </DialogContent>
                </Dialog>
            </div>

        </div>
    )
}