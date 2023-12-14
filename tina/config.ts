import { defineConfig } from "tinacms";

import { call_to_actionFields } from "./templates";
import { footerFields } from "./templates";
import { heroFields } from "./templates";
import { willkommenFields } from "./templates";
import { kontaktformularFields } from "./templates";
import { leistungenFields } from "./templates";
import { qualifikationenFields } from "./templates";
import { teambereichFields } from "./templates";
import { zahlen_for_funFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "hunde/static",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "hunde/static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        format: "yml",
        label: "Hero",
        name: "hero",
        path: "hunde/data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "hero",
        },
        fields: [...heroFields()],
      },
      {
        format: "yml",
        label: "Zahlen for Fun",
        name: "zahlen_for_fun",
        path: "hunde/data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "counter",
        },
        fields: [...zahlen_for_funFields()],
      },
      {
        format: "md",
        label: "Willkommen - Seite",
        name: "willkommen",
        path: "hunde/content",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "_index",
        },
        fields: [...willkommenFields()],
      },
      {
        format: "yml",
        label: "Team",
        name: "team",
        path: "hunde/data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "team",
        },
        fields: [...teambereichFields()],
      },
      {
        format: "yml",
        label: "Call To Action",
        name: "call_to_action",
        path: "hunde/data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "call_to_action",
        },
        fields: [...call_to_actionFields()],
      },
      {
        format: "md",
        label: "Leistungen - Seite",
        name: "leistungen",
        path: "hunde/content/leistungen",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "_index",
        },
        fields: [...leistungenFields()],
      },
      {
        format: "md",
        label: "Qualifikationen - Seite",
        name: "qualifikationen",
        path: "hunde/content/qualifikationen",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "_index",
        },
        fields: [...qualifikationenFields()],
      },
      {
        format: "md",
        label: "Kontakt - Seite",
        name: "kontaktformular",
        path: "hunde/content/contact",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "_index",
        },
        fields: [...kontaktformularFields()],
      },
      {
        format: "yml",
        label: "Footer",
        name: "footer",
        path: "hunde/data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "footer",
        },
        fields: [...footerFields()],
      },
    ],
  },
});
