import { NewstackNode } from "@moureau/newstack";

export function Intro({ title, children }: { title: string, children?: NewstackNode }) {
    return (
        <div class="flex flex-col">
            <div class="pt-16 pb-8 motion-safe:animate-fade-in motion-safe:animate-fill-both">
                <h1 class="font-mono text-4xl sm:text-5xl font-bold mb-4">
                    {title}
                </h1>
                <div class="w-12 h-0.5 bg-[#fc51a6] mb-2" />
            </div>

            {children}
        </div>
    )
}
