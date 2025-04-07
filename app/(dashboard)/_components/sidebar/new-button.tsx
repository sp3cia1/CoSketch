"use client"

import { Plus } from "lucide-react";

import { CreateOrganization } from "@clerk/nextjs";

import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Hint } from "@/components/hint";

export const NewButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="aspect-square">
                    <Hint 
                        label= "Create Organization"
                        side="right"
                        align="start"
                        sideOffset={18}
                    >
                        <button className="h-full w-full rounded-md bg-white/15 flex items-center justify-center opacity-60 hover:opacity-100 transition">
                            <Plus className="text-white" />
                        </button>
                    </Hint>
                </div>
            </DialogTrigger>
            <DialogContent className="max-w-md w-full rounded-lg p-6 bg-gray-400 shadow-lg">
                <div className="flex flex-col items-center justify-center">
                    <CreateOrganization />
                </div>
            </DialogContent>
        </Dialog>
    )
}