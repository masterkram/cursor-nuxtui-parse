import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import fs from "fs/promises";

const server = new McpServer({
  name: "nuxt-ui",
  version: "1.0.0",
});

const getComponentNames = async () => {
  const files = await fs.readdir("components");
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
};


server.registerResource(
  "nuxtui-component-list",
  "nuxtui://components",
  {
    title: "Get All Components",
    description: "Get all available nuxtui ui library components"
  },
  async (uri, variables, extra) => {
    const componentNames = await getComponentNames();
    return {
      contents: [{
        uri: uri.href,
        mimeType: "text/plain",
        text: componentNames.join("\n")
      }]
    }
  }
);


server.registerResource(
  "nuxtui-component-documentation",
  new ResourceTemplate("nuxtui://components/{ComponentName}", { list: async () => ({ resources: (await getComponentNames()).map((name) => ({ name, uri: `nuxtui://components/${name}` })) }) }),
  {
    title: "User Profile",
    description: "User profile information"
  },
  async (uri, variables, extra) => {
    const file = await fs.readFile(`components/${variables.ComponentName}.md`, "utf-8");
    return {
      contents: [{
        uri: uri.href,
        mimeType: "text/markdown",
        text: file
      }]
    }
  }
);

async function main() {
  const transport = new StdioServerTransport();
  console.log("Starting Nuxt UI MCP server...");
  await server.connect(transport);
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});