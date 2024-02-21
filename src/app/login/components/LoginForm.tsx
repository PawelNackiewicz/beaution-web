"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as z from "zod";
import { Button, Input, Checkbox } from "@/components/atoms";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    useToast
} from "@/components/organisms";
import { PageLoadSpinner } from "@/components/molecules";
import { getMe, login } from "@/services/authService";
import { useAuth } from "@/providers/AuthProvider";

const required_error = "Pole jest wymagane";

const FormSchema = z.object({
    email: z
        .string({
            required_error,
        })
        .email({
            message: "Niepoprawny adres email",
        }),
    password: z.string({
        required_error,
    }),
    rememberMe: z.boolean().optional(),
});

export function LoginForm() {
    const { toast } = useToast();
    const { setUser } = useAuth();
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: "",
            rememberMe: true,
        },
    });

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        setIsLoading(true);
        try {
            const r = await login(data.email, data.password);
            console.log(r);
            const user = await getMe();
            setUser(user)
            toast({
                variant: "default",
                title: "Logged in",
            });
        } catch (e) {
            console.log(e);

            toast({
                variant: "destructive",
                title: "Failed to log in check your data.",
            });
        } finally {
            setIsLoading(false);
            return;
        }
    }

    const [isLoading, setIsLoading] = useState(false);

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
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Hasło" {...field} type="password" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex w-full items-center justify-between">
                    <FormField
                        control={form.control}
                        name="rememberMe"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                                <FormControl>
                                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                </FormControl>
                                <FormLabel>Zapamiętaj mnie</FormLabel>
                            </FormItem>
                        )}
                    />
                    <Button type="button" variant="link" >
                        <p className="text-gray-500 hover:text-black">
                            Zapomniałeś hasła?
                        </p>
                    </Button>
                </div>
                <Button type="submit">Login</Button>
            </form>
        </Form>
    );
}
