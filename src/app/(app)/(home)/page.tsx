

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {

    return (
        <div className="flex flex-col gap-y-4 p-6">
            <div>
                <Button variant="elevated">
                    I am button
                </Button>
            </div>
            <div>
                <Input className="" />
            </div>
            <div>
              <Progress value={70} />
            </div>
            <div>
              <Textarea />
            </div>
        </div>
    )
}
