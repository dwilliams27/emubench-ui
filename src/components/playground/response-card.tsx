import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { JsonEditor } from "@/components/ui/json-editor";
import { Badge } from "@/components/ui/badge";
import type { AxiosResponse } from "axios";
import { Skeleton } from "@/components/ui/skeleton";

export interface ResponseCardProps {
  response: AxiosResponse<any, any> | null;
  loading: boolean;
}

export function ResponseCard({ response, loading }: ResponseCardProps) {
  return (
    <Card className="w-full md:w-1/2">
      <CardHeader>
        <div className="flex flex-row items-center justify-between space-x-2 h-9">
          <CardTitle>Response</CardTitle>
          {response?.status && (
            <Badge variant={response.status === 200 ? "default" : "destructive"}>
              {response.status}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        { loading ? (
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4" />
              <Skeleton className="h-4" />
            </div>
          </div>
          ) : (
            <>
              <h2>Body</h2>
              { response?.data ? <JsonEditor readOnly value={response?.data} onChange={()=>{}} /> : <p className="text-gray-500">No response data</p> }
            </>
          )
        }
      </CardContent>
      <CardFooter className="flex">
      </CardFooter>
    </Card>
  );
}