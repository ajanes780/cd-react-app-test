import {render, screen} from '@testing-library/react';
import App from './App';
import logo from './stackfails.jpg'

test('renders link to website', () => {
    render(<App/>);
    const linkElement = screen.getByText(/Check out the stack fails blog for more tutorials/i);
    expect(linkElement).toBeInTheDocument();
});

// write a test to confirm background logo is present

test('renders background logo', () => {
    render(<App/>)
//   find background image
    const backgroundElement = screen.getByTestId('background')
    expect(backgroundElement).toHaveStyle(`background-image: url(${logo})`)

})
