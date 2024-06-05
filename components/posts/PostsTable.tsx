import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import posts from "@/data/posts";
import Link from "next/link";
import { Post } from "@/types/posts";

interface DataTableProps {
  limit?: number;
  title?: string;
}

const PostsTable = ({ limit, title }: DataTableProps) => {
  const sortedPosts: Post[] = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const filteredPosts: Post[] = limit
    ? sortedPosts.slice(0, limit)
    : sortedPosts;

  return (
    <div className="mt-10">
      <h3 className="text-2xl mb-4 font-semibold">{title ? title : "Posts"}</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Author</TableHead>
            <TableHead className="hidden md:table-cell text-right">
              Date
            </TableHead>
            <TableHead className="text-right">
              View
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPosts.map(({ author, body, comments, date, id, title }) => {
            return (
              <TableRow key={id}>
                <TableCell>{title}</TableCell>
                <TableCell className="hidden md:table-cell">{author}</TableCell>
                <TableCell className="hidden md:table-cell text-right">
                  {date}
                </TableCell>
                <TableCell className="text-right">
                  <Link href={`/posts/edit/${id}`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">
                      Edit
                    </button>
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default PostsTable;
