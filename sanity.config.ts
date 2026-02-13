import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./src/sanity/schemaTypes";
import { presentationTool } from "sanity/presentation";
import { resolve } from "./src/sanity/lib/resolve";

const previewOrigin =
  import.meta.env.PUBLIC_SANITY_PREVIEW_ORIGIN ?? "http://localhost:4321";

export default defineConfig({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  plugins: [
    structureTool(),
    presentationTool({
	  resolve,
      previewUrl: { origin: previewOrigin },
    }),
  ],
  schema,
});