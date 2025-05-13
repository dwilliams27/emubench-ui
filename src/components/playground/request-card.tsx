import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DSERV_ENDPOINTS } from "@/constants/api";
import React from "react";
import { JsonEditor } from "@/components/ui/json-editor";
import { useApi } from "@/contexts/api-context";
import type { AxiosError } from "axios";

export interface RequestCardProps {
  setResponse: (response: any) => void;
  setLoading: (loading: boolean) => void;
}

export function RequestCard({ setResponse, setLoading }: RequestCardProps) {
  const { api } = useApi();
  const [selectedEndpoint, setSelectedEndpoint] = React.useState<string>("TEXT_ORX_SETUP");
  const [code, setCode] = React.useState(
    JSON.stringify(DSERV_ENDPOINTS.TEXT_ORX_SETUP.examplePayload, null, 2)
  );

  const handleEndpointChange = (value: string) => {
    setSelectedEndpoint(value);
    setCode(JSON.stringify(DSERV_ENDPOINTS[value as keyof typeof DSERV_ENDPOINTS].examplePayload, null, 2));
    setResponse(null);
  };

  const handleCallApi = async () => {
    const endpoint = DSERV_ENDPOINTS[selectedEndpoint as keyof typeof DSERV_ENDPOINTS];
    const payload = JSON.parse(code);
    setLoading(true);
    try {
      const response = await api.makeApiCall(endpoint.path, endpoint.method, payload);
      setResponse(response);
    } catch (error) {
      setResponse((error as AxiosError).response);
      console.error("API Error:", error);
    }
    setLoading(false);
  }

  return (
    <Card className="w-full md:w-1/2">
      <CardHeader>
        <div className="flex flex-row items-center justify-between space-x-2">
          <CardTitle>Request</CardTitle>
          <div className="flex flex-col space-y-1.5">
            <Select value={selectedEndpoint} onValueChange={handleEndpointChange}>
              <SelectTrigger id="endpoint">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent position="popper">
                { Object.entries(DSERV_ENDPOINTS).map(([key, endpoint]) => (
                  <SelectItem key={key} value={key}>
                    {endpoint.name}
                  </SelectItem>
                )) }
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <h2>Body</h2>
        <JsonEditor value={code} onChange={setCode} />
      </CardContent>
      <CardFooter className="flex">
        <Button className="ml-auto" onClick={handleCallApi}>Send</Button>
      </CardFooter>
    </Card>
  );
}