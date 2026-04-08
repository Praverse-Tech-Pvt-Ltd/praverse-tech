"use client";

import { useState } from "react";
import {
  generateBlogIdeas,
  type GenerateBlogIdeasOutput,
} from "@/ai/flows/generate-blog-ideas";
import { saveBlogIdeasGeneration } from "@/app/actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wand2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function BlogIdeasGenerator() {
  const [topic, setTopic] = useState("AI in Pharma");
  const [output, setOutput] = useState<GenerateBlogIdeasOutput | undefined>();
  const [status, setStatus] = useState<"idle" | "loading">("idle");

  const handleGenerate = async () => {
    setStatus("loading");
    setOutput(undefined);

    const result = await generateBlogIdeas({ topic, numIdeas: 3 });
    await saveBlogIdeasGeneration({ topic, ideas: result.ideas });
    setOutput(result);
    setStatus("idle");
  };

  const generating = status === "loading";
  const response = output;

  return (
    <Card className="rounded-[28px] border-border/60 bg-card/55 shadow-xl backdrop-blur-sm">
      <CardHeader>
        <Badge className="w-fit bg-primary/15 text-primary ring-1 ring-primary/25">
          Insight lab
        </Badge>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Wand2 className="h-5 w-5 text-primary" />
          Explore blog directions
        </CardTitle>
        <CardDescription className="text-sm leading-7 md:text-base">
          Use the in-site generator to spark new founder notes, healthcare AI
          perspectives, or applied intelligence article angles.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <Select onValueChange={setTopic} defaultValue={topic}>
            <SelectTrigger className="h-12 w-full rounded-2xl border-border/60 bg-background/55 px-4 sm:w-[220px]">
              <SelectValue placeholder="Select a topic" />
            </SelectTrigger>
            <SelectContent className="rounded-2xl border-border/60 bg-popover/95 backdrop-blur-xl">
              <SelectItem value="AI in Pharma">AI in Pharma</SelectItem>
              <SelectItem value="Healthcare Innovation">
                Healthcare Innovation
              </SelectItem>
              <SelectItem value="Regulatory Compliance">
                Regulatory Compliance
              </SelectItem>
            </SelectContent>
          </Select>
          <Button
            onClick={handleGenerate}
            disabled={generating}
            className="h-12 rounded-full px-6"
          >
            {generating ? "Generating..." : "Generate Ideas"}
          </Button>
        </div>

        {generating && !response && (
          <p className="text-sm text-muted-foreground">
            Generating a few fresh directions...
          </p>
        )}

        {response && (
          <div className="space-y-3 pt-4">
            <h4 className="font-semibold">Suggested angles</h4>
            <ul className="space-y-3">
              {response.ideas.map((idea, index) => (
                <li
                  key={index}
                  className="rounded-2xl border border-border/50 bg-background/40 px-4 py-3 text-sm leading-7 text-muted-foreground"
                >
                  {idea}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
