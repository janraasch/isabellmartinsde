import { defineConfig } from "tinacms";

import { call_to_actionFields } from "./templates";
import { footerFields } from "./templates";
import { heroFields } from "./templates";
import { homepageFields } from "./templates";
import { kontaktformularFields } from "./templates";
import { leistungenFields } from "./templates";
import { qualifikationenFields } from "./templates";
import { teambereichFields } from "./templates";
import { wissenswertes___eintragFields } from "./templates";
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
        fields: [
          {
            type: "boolean",
            name: "enable",
            label: "Zahlen for Fun anzeigen?",
          },
          {
            type: "string",
            name: "heading",
            label: "Überschrift",
          },
          {
            type: "object",
            name: "counter_item",
            label: "Zahlen",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Titel",
              },
              {
                type: "string",
                name: "number",
                label: "Anzahl",
              },
            ],
          },
        ],
      },
      {
        format: "md",
        label: "Willkommen",
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
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "Titel",
          },
        ],
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
        fields: [
          {
            type: "boolean",
            name: "enable",
            label: "Team anzeigen?",
          },
          {
            type: "string",
            name: "heading",
            label: "Überschrift",
          },
          {
            type: "string",
            name: "tagline",
            label: "Tagline Paragraph",
          },
          {
            type: "object",
            name: "team_member",
            label: "Teammitglied",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Titel",
              },
              {
                type: "image",
                name: "image",
                label: "Bild",
              },
              {
                type: "string",
                name: "text",
                label: "Text",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
        ],
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
        fields: [
          {
            type: "boolean",
            name: "enable",
            label: "»Call To Action« Bereich anzeigen?",
          },
          {
            type: "image",
            name: "background_image",
            label: "Hintergrund Bild",
          },
          {
            type: "string",
            name: "title",
            label: "Überschrift",
          },
          {
            type: "string",
            name: "primary_button",
            label: "Button Text",
          },
          {
            type: "string",
            name: "primary_button_url",
            label: "Button Link",
          },
        ],
      },
      {
        format: "md",
        label: "Leistungen",
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
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "Titel",
          },
          {
            type: "string",
            name: "heading",
            label: "Grosse Überschrift",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "scroll_down_button_text",
            label: "»Scroll Down«-Button Text",
          },
          {
            type: "object",
            name: "leistungen",
            label: "Leistung",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Titel",
              },
              {
                type: "string",
                name: "heading",
                label: "Überschrift",
              },
              {
                type: "image",
                name: "image",
                label: "Bild",
              },
              {
                type: "string",
                name: "text",
                label: "Text",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "string",
            name: "beratungsablauf",
            label: "Beratungsablauf",
            ui: {
              component: "textarea",
            },
          },
        ],
      },
      {
        format: "md",
        label: "Qualifikationen",
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
        fields: [
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "string",
            name: "heading",
            label: "heading",
          },
          {
            type: "string",
            name: "scroll_down_button_text",
            label: "scroll_down_button_text",
          },
          {
            type: "object",
            name: "qualifications",
            label: "qualifications",
            list: true,
            fields: [
              {
                type: "string",
                name: "institute",
                label: "institute",
              },
              {
                type: "string",
                name: "title",
                label: "title",
              },
              {
                type: "image",
                name: "image",
                label: "image",
              },
              {
                type: "string",
                name: "text",
                label: "text",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
        ],
      },
      {
        format: "md",
        label: "Kontaktformular",
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
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "Titel",
          },
          {
            type: "string",
            name: "heading",
            label: "Große Überschrift",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "string",
            name: "form_heading",
            label: "Kleine Überschrift",
            required: true,
          },
          {
            type: "string",
            name: "form_name",
            label: "Name des Formulars",
            required: true,
          },
          {
            type: "string",
            name: "form_field_email_placeholder",
            label: "Formular: E-Mail-Adresse Platzhalter",
            required: true,
          },
          {
            type: "boolean",
            name: "form_field_email_required",
            label: "Formular: E-Mail-Adresse Notwendig?",
          },
          {
            type: "string",
            name: "form_field_lastname_placeholder",
            label: "Formular: Nachname Platzhalter",
            required: true,
          },
          {
            type: "boolean",
            name: "form_field_lastname_required",
            label: "Formular: Nachname Notwendig?",
          },
          {
            type: "string",
            name: "form_field_name_placeholder",
            label: "Formular: Vorname Platzhalter",
            required: true,
          },
          {
            type: "boolean",
            name: "form_field_name_required",
            label: "Formular: Vorname Notwendig?",
          },
          {
            type: "string",
            name: "form_field_tel_placeholder",
            label: "Formular: Telefon Platzhalter",
            required: true,
          },
          {
            type: "boolean",
            name: "form_field_tel_required",
            label: "Formular: Telefon Notwendig?",
          },
          {
            type: "string",
            name: "form_field_text_placeholder",
            label: "Formular: Text Platzhalter",
            required: true,
          },
          {
            type: "boolean",
            name: "form_field_text_required",
            label: "Formular: Text Notwendig?",
          },
          {
            type: "string",
            name: "form_submit_button_text",
            label: "Formular: Button",
            required: true,
          },
          {
            type: "string",
            name: "form_submit_success_text",
            label: "Formular: Success-Message",
            required: true,
          },
          {
            type: "string",
            name: "form_submit_error_text",
            label: "Formular: Error-Message",
            required: true,
          },
        ],
      },
      {
        format: "md",
        label: "Wissenswertes Übersicht",
        name: "_bersicht",
        path: "hunde/content/wissenswertes",
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
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Wissenswertes Einträge",
        name: "eintr_ge",
        path: "hunde/content/wissenswertes",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
          exclude: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...wissenswertes___eintragFields(),
        ],
      },
      {
        format: "md",
        label: "Anamnesebogen",
        name: "anamnesebogen",
        path: "hunde/content/anamnesebogen",
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
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
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
        fields: [
          {
            type: "object",
            name: "contactInfo",
            label: "Kontakt",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Titel",
              },
              {
                type: "string",
                name: "phone",
                label: "Telefon",
              },
              {
                type: "string",
                name: "email",
                label: "Email",
              },
            ],
          },
          {
            type: "object",
            name: "sitemap",
            label: "Sitemap",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Titel",
              },
              {
                type: "object",
                name: "link",
                label: "Links",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "name",
                    label: "Name",
                  },
                  {
                    type: "string",
                    name: "url",
                    label: "URL",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "legal",
            label: "Rechtliches",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Titel",
              },
              {
                type: "object",
                name: "link",
                label: "Links",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "name",
                    label: "Name",
                  },
                  {
                    type: "string",
                    name: "url",
                    label: "URL",
                  },
                ],
              },
            ],
          },
          {
            type: "string",
            name: "back_to_top_button_text",
            label: "Zurück nach oben - Text",
          },
        ],
      },
    ],
  },
});
