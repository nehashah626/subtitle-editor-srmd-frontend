import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App component with SubtitleCreator", () => {
  // Render the App component
  const { getByText } = render(<App />);

  // Check if the SubtitleCreator is present in the rendered component
  const subtitleCreatorElement = getByText(/SubtitleCreator/i);
  expect(subtitleCreatorElement).toBeInTheDocument();
});

// You can add more tests based on your component's functionality

/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
*/
