"use client";
import { Button, Input } from "@/components/atoms";
import { PageLoadSpinner } from "@/components/molecules";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
    useToast
} from "@/components/organisms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const required_error = "Pole jest wymagane";

const FormSchema = z.object({
	email: z
		.string({
			required_error,
		})
		.email({
			message: "Niepoprawny adres email",
		}),
});


type ResetPasswordFormProps = {}

export const ResetPasswordForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: "",
		},
	});


	async function onSubmit(data: z.infer<typeof FormSchema>) {
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
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder="Email" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Login</Button>
			</form>
		</Form>
};