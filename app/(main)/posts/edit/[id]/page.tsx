"use client";
import BackButton from "@/components/BackButton";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import posts from "@/data/posts";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

const schema = z.object({
  title: z.string().min(1, { message: "Title is Required" }),
  body: z.string().min(1, { message: "Body is Required" }),
  author: z.string().min(1, { message: "Author is Required" }),
  date: z.string().min(1, { message: "Date is Required" }),
});

interface PostEditPageProps {
  params: {
    id: string;
  };
}

const PostEditPage = ({ params: { id } }: PostEditPageProps) => {
  const { toast } = useToast();

  const post = posts.find((post) => post.id === id);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: post,
  });

  const handleSubmit = (values: z.infer<typeof schema>) => {
    toast({
      title: "Post has been Updated",
      description: `Updated by ${post?.author} on ${post?.date}`,
      action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
    });
  };

  return (
    <>
      <BackButton text="Back to Posts" link="/posts" />
      <h3 className="text-2xl mb-4"></h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                  Title
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Title"
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 dark:text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                  Body
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Body"
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 dark:text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                  Author
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Author"
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 dark:text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                  Date
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Date"
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 dark:text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full dark:bg-slate-800 dark:text-white">
            Update Post
          </Button>
        </form>
      </Form>
    </>
  );
};

export default PostEditPage;
