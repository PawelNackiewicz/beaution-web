"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
	useToast,
} from "@/components/organisms";
import { PageLoadSpinner } from "@/components/molecules";
import { Button, Input } from "@/components/atoms";

const required_error = "Pole jest wymagane";

const FormSchema = z.object({
	name: z.string({
		required_error,
	}),
});

export function AddSalonForm() {
	const [isLoading, setIsLoading] = useState(false);
	const { toast } = useToast();
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			name: "",
		},
	});

	async function onSubmit() {
		setIsLoading(true);
		try {
			toast({
				variant: "default",
				title: "Logged in",
			});
		} catch (e) {
			toast({
				variant: "destructive",
				title: "Failed to log in check your data.",
			});
		} finally {
			setIsLoading(false);
			return;
		}
	}

	if (isLoading) return <PageLoadSpinner />;

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col gap-4">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder="Nazwa salonu" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Dodaj salon</Button>
			</form>
		</Form>
	);
}
