import React from "react";
import { Searchbar } from "./Searchbar";
import { SearchInput } from "./SearchInput";
import { SearchDatepicker } from "./SearchDatepicker";
import { SearchButton } from "./SearchButton";

export default {
  title: "COMPONENTS API/Searchbar",
  parameters: {
    backgrounds: {
      default: "modal",
      values: [{ name: "modal", value: "#C6C6C6" }],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Story />
      </div>
    ),
  ],
};

const inputs = {
  secondary: {
    key: "SEARCH_INPUT_SECONDARY",
    className: "searchInputSecondary",
    inputLabel: "Service",
    inputPlaceholder: "What service are you looking for?",
    isSearch: false,
    divider: true,
  },
  primary: {
    key: "SEARCH_INPUT_PRIMARY",
    className: "searchInputPrimary",
    inputLabel: "Date",
    inputPlaceholder: "Add a date for your event",
    isSearch: true,
    divider: false,
  },
};

const TemplateSearchButton = (args) => <SearchButton {...args} />;
export const SearchButtonDefault = TemplateSearchButton.bind({});
SearchButtonDefault.args = {
  expand: true,
};

const TemplateSearchInput = (args) => <SearchInput {...args} />;
export const SearchInputDefault = (args) => <TemplateSearchInput {...args} />;
SearchInputDefault.args = {
  inputLabel: "Service",
  inputPlaceholder: "What service are you looking for?",
  isSearch: true,
};

const TemplateSearchDatepicker = (args) => <SearchDatepicker {...args} />;
export const SearchDatepickerDefault = (args) => (
  <TemplateSearchDatepicker {...args} />
);
SearchDatepickerDefault.args = {
  inputLabel: "Date",
  inputPlaceholder: "Add a date for your event",
  isSearch: true,
};

const TemplateSearchbar = (args) => <Searchbar {...args} />;
export const SearchbarPrimary = TemplateSearchbar.bind({});
SearchbarPrimary.args = {
  inputs: inputs,
  inputLabel: "Service",
  inputPlaceholder: "What service are you looking for?",
};
