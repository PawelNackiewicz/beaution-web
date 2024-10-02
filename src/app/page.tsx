import { PublicLayout } from "@/components/organisms/layouts/PublicLayout";

export default function Home({ children }: { children?: React.ReactNode }) {
	return <PublicLayout>{children}</PublicLayout>;
}
