/* ---------- External ---------- */
import { NewstackServer } from "@moureau/newstack/server";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

/* ---------- Entrypoint ---------- */
import { Application } from "./src/Application";

const app = new Application();
const server = new NewstackServer();
server.start(app, {
    deps: { getPost, getPosts },
});

async function getPosts() {
    try {
        const raw = await readFile(
            join(process.cwd(), "public/posts/index.json"),
            "utf-8"
        );
        return JSON.parse(raw);
    } catch {
        return [];
    }
}

async function getPost({ slug }: { slug: string }) {
    const raw = await readFile(
        join(process.cwd(), `public/posts/${slug}.md`),
        "utf-8"
    );

    return raw;
}
