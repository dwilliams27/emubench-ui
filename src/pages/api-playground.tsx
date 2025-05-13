import { RequestCard } from "@/components/playground/request-card";
import { ResponseCard } from "@/components/playground/response-card";
import type { AxiosResponse } from "axios";
import React from "react";

export default function ApiPlayground() {
  const [response, setResponse] = React.useState<AxiosResponse<any, any> | null>(null);
  const [loading, setLoading] = React.useState(false);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <RequestCard setResponse={setResponse} setLoading={setLoading} />
      <ResponseCard response={response} loading={loading} />
    </div>
  )
}
