import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { JsonEditor } from "@/components/ui/json-editor";

export function ResponseCard() {
  const [code, setCode] = React.useState('');

  return (
    <Card className="w-full md:w-1/2">
      <CardHeader>
        <CardTitle>Response</CardTitle>
      </CardHeader>
      <CardContent>
        <h2>Body</h2>
        <JsonEditor value={code} onChange={setCode} />
      </CardContent>
      <CardFooter className="flex">
      </CardFooter>
    </Card>
  );
}