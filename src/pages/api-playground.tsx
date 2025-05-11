import { RequestCard } from "@/components/playground/request-card";
import { ResponseCard } from "@/components/playground/response-card";

export default function ApiPlayground() {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <RequestCard />
      <ResponseCard />
    </div>
  )
}
