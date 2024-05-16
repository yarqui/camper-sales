# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

<!-- {
  /* ============ Icon usage from sprite ============ */
}
{
  /* <Icon className="fill-almostWhite" iconId="icon-calendar" /> */
}

{
  /* ============ One of the buttons ============ */
}
{
  /* <Button
        type="button"
        onClick={() => {}}
        className="bg-carmineColor px-15 text-chalkColor hocus:bg-carmineAccentColor"
      >
        Search
      </Button> */
}

{
  /* ============ camper list. need to be adjusted ============ */
}
{
  /* <ul>
        {campers.map(({ _id, gallery }) => (
          <li key={_id}>
            {gallery.map((img, imgIndex) => (
              <div className="size-52 overflow-hidden rounded-lg">
                <img
                  key={imgIndex}
                  src={img}
                  alt={`camper-${_id}-${imgIndex}`}
                  className="h-full object-cover"
                />
              </div>
            ))}
          </li>
        ))}
      </ul> */
} -->
