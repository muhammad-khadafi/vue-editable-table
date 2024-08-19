# Editable Table Component
This project is a Vue.js component that provides an editable table interface, allowing users to dynamically add rows, edit cell values (with type-specific validation, such as converting salary inputs to numbers), and display calculated totals, such as the sum of all salaries. It is particularly useful for scenarios where real-time updates to data and calculations are required in a user-friendly tabular format.

## Features
- **Dynamic Row Addition**: Users can add new rows to the table with a button click.
- **Editable Cells**: Each cell within the table is editable, and specific validation can be applied to ensure data consistency (e.g., converting salary inputs to numbers).
- **Real-Time Calculations**: The component automatically recalculates totals, such as the total salary, whenever a related cell value is updated.
- **Responsive Design**: The table and its components are designed to be responsive, ensuring a smooth user experience across different devices.

## Install Dependencies:
    ```bash
    npm install
    ```

## Run the Development Server:
    ```bash
    npm run dev
    ```

## Recommended IDE Setup

- [Webstorm](https://www.jetbrains.com/webstorm/)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## Author
- **Muhammad Yusuf Khadafi**
