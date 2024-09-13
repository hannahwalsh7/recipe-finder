import Image from "next/image";
import RecipePage from "@/components/RecipeComponents/RecipePage";

export default function Home() {
	return (
		<div className="items-center justify-items-center min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
			<RecipePage />
		</div>
	);
}
