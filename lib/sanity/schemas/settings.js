import { CogIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "settings",
  type: "document",
  title: "Settings",
  icon: CogIcon,
  fieldsets: [
    {
      title: "SEO & metadata",
      name: "metadata",
      options: {
        collapsible: true,
        collapsed: false
      }
    },
    {
      title: "Social Media",
      name: "social"
    },
    {
      title: "Website Logo",
      name: "logos",
      options: {
        collapsible: true,
        collapsed: false
      }
    },
    {
      title: "About",
      name: "about",
      options: {
        collapsible: true,
        collapsed: false
      }
    },
    {
      title: "Contact",
      name: "contact",
      options: {
        collapsible: true,
        collapsed: false
      }
    },
    {
      title: "Subscription",
      name: "subscription",
      options: {
        collapsible: true,
        collapsed: false
      }
    }
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Site title"
    }),
    defineField({
      title: "URL",
      name: "url",
      type: "url",
      description: "The main site url. Used to create canonical url"
    }),
    defineField({
      name: "copyright",
      type: "string",
      title: "Copyright Name",
      description: "Enter company name to appear in footer after ©"
    }),
    defineField({
      title: "Main logo",
      description: "Upload your main logo here. SVG preferred. ",
      name: "logo",
      type: "image",
      fieldset: "logos",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity."
        }
      ]
    }),

    defineField({
      title: "Alternate logo (optional)",
      description:
        "Upload alternate logo here. it can be light / dark variation ",
      name: "logoalt",
      type: "image",
      fieldset: "logos",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity."
        }
      ]
    }),

    defineField({
      name: "w3ckey",
      type: "string",
      title: "Web3Forms Access Key",
      description:
        "Enter Access key obtained from web3forms.com. It is required to make the form work."
    }),

    defineField({
      name: "social",
      type: "array",
      title: "Social Links",
      description: "Enter your Social Media URLs",
      validation: Rule => Rule.unique(),
      of: [
        {
          type: "object",
          fields: [
            {
              type: "string",
              name: "media",
              title: "Choose Social Media",
              options: {
                list: [
                  { title: "Twitter", value: "twitter" },
                  { title: "Facebook", value: "facebook" },
                  { title: "Instagram", value: "instagram" },
                  { title: "Linkedin", value: "linkedin" },
                  { title: "Youtube", value: "youtube" }
                ]
              }
            },
            {
              type: "url",
              name: "url",
              title: "Full Profile URL"
            }
          ],
          preview: {
            select: {
              title: "media",
              subtitle: "url"
            }
          }
        }
      ]
    }),

    defineField({
      title: "Meta Description",
      name: "description",
      fieldset: "metadata",
      type: "text",
      rows: 5,
      validation: Rule => Rule.min(20).max(200),
      description: "Enter SEO Meta Description"
    }),

    defineField({
      name: "openGraphImage",
      type: "image",
      title: "Open Graph Image",
      description:
        "Image for sharing previews on Facebook, Twitter etc.",
      fieldset: "metadata"
    }),
    defineField({
      title: "Sub title",
      name: "aboutSubTitle",
      fieldset: "about",
      type: "text",
      rows: 1,
      validation: Rule => Rule.min(0).max(200),
      description: "Enter sub title (slogan)"
    }),
    defineField({
      title: "Body",
      name: "aboutBody",
      fieldset: "about",
      type: "text",
      rows: 5,
      validation: Rule => Rule.min(20).max(2000),
      description: "Enter about details"
    }),
    defineField({
      title: "Contact link Caption",
      name: "contactLinkCaption",
      fieldset: "about",
      type: "text",
      rows: 1,
      validation: Rule => Rule.min(0).max(50),
      description: "Enter contact link caption"
    }),

    defineField({
      title: "Sub title",
      name: "contactSubTitle",
      fieldset: "contact",
      type: "text",
      rows: 1,
      validation: Rule => Rule.min(0).max(200),
      description: "Enter sub title (slogan)"
    }),
    defineField({
      title: "Intro title",
      name: "contactIntroTitle",
      fieldset: "contact",
      type: "text",
      rows: 1,
      validation: Rule => Rule.min(0).max(50),
      description: "Enter Intro title"
    }),
    defineField({
      title: "Intro",
      name: "contactIntro",
      fieldset: "contact",
      type: "text",
      rows: 3,
      validation: Rule => Rule.min(20).max(300),
      description: "Enter about details"
    }),
    defineField({
      name: "email",
      type: "string",
      title: "Support Email",
      fieldset: "contact",
      validation: Rule =>
        Rule.regex(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          {
            name: "email", // Error message is "Does not match email-pattern"
            invert: false // Boolean to allow any value that does NOT match pattern
          }
        )
    }),
    defineField({
      name: "phone",
      type: "string",
      title: "Support Phone",
      fieldset: "contact"
    }),
    defineField({
      name: "address",
      type: "string",
      title: "Address",
      fieldset: "contact",
      validation: Rule => Rule.min(0).max(50)
    }),
    defineField({
      name: "subscriptionAlert",
      type: "string",
      title: "Alert",
      fieldset: "subscription",
      validation: Rule => Rule.min(0).max(50),
      description: "Enter a message that encourages user to subscribe"
    }),
    defineField({
      name: "subscriptionPopupDelay",
      type: "number",
      title: "Delay (seconds)",
      fieldset: "subscription",
      descripton:
        "Specify how many seconds to wait before the popup is displayed"
    })
  ]
});
