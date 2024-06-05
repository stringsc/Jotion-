"use client";
import { ArrowRight} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";
import { SignInButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";
import  Link  from "next/link";

export const Heading = () => {
    const { user } = useUser();
    const {isAuthenticated, isLoading} = useConvexAuth();
    return (
        <div className= "max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Streamline Your Ideas, Documents and Plans. Welcome to <span 
                className="underline"> Jotion </span>
            </h1>
            <h3 className ="text-base sm:text-xl md:text-2xl 
            font-medium">
            Jotion is the integrated workspace that facilitates <br />
            improved and accelerated productivity.
            </h3>
            {isLoading && (
            <div className="w-full flex items-center justify-center">
                <Spinner size ="lg" />
            </div>
            )}
            {isAuthenticated && !isLoading && (
            <Button asChild>
                <Link href="/documents">
                     Start Creating
                    <ArrowRight className ="h-4 w-4 ml-2"/>
                </Link>
            </Button>
            )}
            {!isAuthenticated && !isLoading && (
                <SignInButton mode="modal">
                    <Button>
                        Get Jotion Free
                        <ArrowRight className="h-4 w-4 ml-2"/>
                    </Button>
                </SignInButton>
            )}
        </div>
    );
    }
