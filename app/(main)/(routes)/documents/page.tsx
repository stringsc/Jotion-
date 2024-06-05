"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";


const DocumentsPage = () => {
	const { user } = useUser();

	return (
		<div className="h-full flex flex-col items-center justify-center space-y-4">
			<Image
				src="/empty.png"
				height="300"
				width="300"
				alt="Empty"
				className="dark:hidden"
			/>
			<Image
				src="/empty-dark.png"
				height="300"
				width="300"
				alt="Empty"
				className="hidden dark:block"
			/>
			<h2 className="text-lg font-medium">
				Welcome to {user?.firstName}&apos;s Jotion
			</h2>
		</div>
	);
};

export default DocumentsPage;