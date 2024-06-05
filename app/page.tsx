import DashBoardCard from "@/components/dashboard/DashBoardCard";
import PostsTable from "@/components/posts/PostsTable";
import { Folders, List, Newspaper } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between gap-5 mr-5 md:flex-row">
        <DashBoardCard
          icon={<List className="text-slate-500" size={72} />}
          title="Orders"
          count={100}
        />
        <DashBoardCard
          icon={<Newspaper className="text-slate-500" size={72} />}
          title="Products"
          count={100}
        />
        <DashBoardCard
          icon={<Folders className="text-slate-500" size={72} />}
          title="Categories"
          count={100}
        />
        <DashBoardCard
          icon={<Newspaper className="text-slate-500" size={72} />}
          title="Orders"
          count={100}
        />
      </div>
      <PostsTable title="Latest Posts" limit={5} />
    </>
  );
}
