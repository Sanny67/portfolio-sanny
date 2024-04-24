import { fireEvent, render, screen } from "@testing-library/react";
import Banner from "./components/Banner";
import Contact from "./components/Contact";

/* test('renders name', () => {
    render(<Banner/>);
    const nameElement = screen.getByText("SANNY");
    expect(nameElement).toBeInTheDocument;
});

test('on change event testing', () => {
    render(<Contact/>);
    const inputElement = screen.getByPlaceholderText("Your name");
    fireEvent.change(inputElement, {target: {value: 'Sanny'}});
    expect(inputElement.value).toBe("Sanny");
}); */