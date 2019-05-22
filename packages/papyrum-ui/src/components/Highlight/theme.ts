export const theme = {
  plain: {
    backgroundColor: "red",
    color: "black"
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: "#659E50"
      }
    },
    {
      types: ["punctuation"],
      style: {
        color: "black"
      }
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7
      }
    },
    {
      types: ["tag", "operator", "number"],
      style: {
        color: "#333333"
      }
    },
    {
      types: ["property", "function"],
      style: {
        color: "#333333"
      }
    },
    {
      types: ["tag-id", "selector", "atrule-id"],
      style: {
        color: "#eeebff"
      }
    },
    {
      types: ["attr-name"],
      style: {
        color: "#333333"
      }
    },
    {
      types: [
        "boolean",
        //"string",
        "entity",
        "url",
        //"attr-value",
        "keyword",
        "control",
        "directive",
        "unit",
        "statement",
        "regex",
        "at-rule",
        "placeholder",
        "variable"
      ],
      style: {
        color: "#0000FF"
      }
    },
    {
      types: [
        "string",
        "attr-value"
      ],
      style: {
        color: "#A31515"
      }
    },
    {
      types: ["deleted"],
      style: {
        textDecorationLine: "line-through"
      }
    },
    {
      types: ["inserted"],
      style: {
        textDecorationLine: "underline"
      }
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic"
      }
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold"
      }
    },
    {
      types: ["important"],
      style: {
        color: "#c4b9fe"
      }
    }
  ]
};