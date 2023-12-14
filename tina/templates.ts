import type { TinaField } from "tinacms";
export function call_to_actionFields() {
  return [
    {
      type: "boolean",
      name: "enable",
      label: "Call To Action anzeigen?",
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
  ] as TinaField[];
}
export function footerFields() {
  return [
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
          ui: {
            itemProps: (item) => ({ label: `${item.name} - ${item.url}` }),
          },
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
          ui: {
            itemProps: (item) => ({ label: `${item.name} - ${item.url}` }),
          },
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
      description: "HTML erlaubt",
    },
  ] as TinaField[];
}
export function heroFields() {
  return [
    {
      type: "image",
      name: "background_image",
      label: "Hintergrund Bild",
    },
    {
      type: "string",
      name: "heading_line_1",
      label: "Erste Zeile der Überschrift",
      description: "HTML erlaubt",
    },
    {
      type: "string",
      name: "heading_line_2",
      label: "Zweite Zeile der Überschrift",
      description: "HTML erlaubt",
    },
    {
      type: "string",
      name: "tagline",
      label: "Tagline",
    },
    {
      type: "string",
      name: "button",
      label: "Button Text",
    },
    {
      type: "string",
      name: "button_url",
      label: "Button Link",
    },
  ] as TinaField[];
}
export function willkommenFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Titel der Seite",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Text",
      isBody: true,
    },
  ] as TinaField[];
}
export function kontaktformularFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Titel der Seite",
    },
    {
      type: "string",
      name: "heading",
      label: "Überschrift",
      description: "HTML erlaubt",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "form_heading",
      label: "Kleine Überschrift über dem Formular",
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
      label: "Formular: Button Text",
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
  ] as TinaField[];
}
export function leistungenFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Titel der Seite",
    },
    {
      type: "string",
      name: "heading",
      label: "Überschrift",
      description: "HTML erlaubt",
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
      type: "rich-text",
      name: "body",
      label: "Text",
      isBody: true,
    },
    {
      type: "object",
      name: "leistungen",
      label: "Leistungen",
      list: true,
      ui: {
        itemProps: (item) => ({ label: `${item.title} - ${item.heading}` }),
      },
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
          type: "rich-text",
          name: "text",
          label: "Text",
          isBody: false,
        },
      ],
    },
    {
      type: "rich-text",
      name: "beratungsablauf",
      label: "Beratungsablauf",
      isBody: false,
    },
  ] as TinaField[];
}
export function qualifikationenFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Titel der Seite",
    },
    {
      type: "string",
      name: "heading",
      label: "Überschrift",
      description: "HTML erlaubt",
    },
    {
      type: "string",
      name: "scroll_down_button_text",
      label: "»Scroll Down«-Button Text",
    },
    {
      type: "object",
      name: "qualifications",
      label: "Qualifikationen",
      list: true,
      ui: {
        itemProps: (item) => ({ label: `${item.title} - ${item.institute}` }),
      },
      fields: [
        {
          type: "string",
          name: "institute",
          label: "Institut",
        },
        {
          type: "string",
          name: "title",
          label: "Titel",
          description: "HTML erlaubt",
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
  ] as TinaField[];
}
export function teambereichFields() {
  return [
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
      label: "Tagline",
    },
    {
      type: "object",
      name: "team_member",
      label: "Teammitglieder",
      description: "Zwei Einträge sind optimal",
      list: true,
      ui: {
        itemProps: (item) => ({ label: `${item.title} - ${item.text}` }),
      },
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
          description: "Markdown erlaubt (z.B. für Links)",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ] as TinaField[];
}
export function zahlen_for_funFields() {
  return [
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
      description: "Drei Einträge sind optimal",
      list: true,
      ui: {
        itemProps: (item) => ({ label: `${item.title} - ${item.number}` }),
      },
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
  ] as TinaField[];
}
