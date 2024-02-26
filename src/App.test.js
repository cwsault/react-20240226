import App from './App';
import { click } from '@testing-library/user-event/dist/click';
import { act, render, screen } from '@testing-library/react';

it('counts total clicks on the counter buttons', () => {
	render(<App />);

	let clicks = 0;
	const buttons = screen.getAllByRole('button');
	expect(buttons).toHaveLength(4);
	expect(screen.getByText(`Total clicks = ${clicks}`)).toBeInTheDocument();

	for (const button of buttons) {
		for (let i = 0; i < 2; i++) {
			act(() => click(button));
			clicks += 1;
			expect(screen.getByText(`Total clicks = ${clicks}`)).toBeInTheDocument();
		}
	}
});
