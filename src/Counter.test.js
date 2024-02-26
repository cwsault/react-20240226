import Counter from './Counter';
import { render, screen } from '@testing-library/react';
import { click } from '@testing-library/user-event/dist/click';

it('displays provided value', () => {
	const value = 4;
	const onChange = jest.fn();
	render(<Counter value={value} onChange={onChange} />);
	expect(screen.getByText(`${value}`)).toBeInTheDocument();
});

test('increment button calls onChange callback with incremented value', () => {
	const value = 4;
	const onChange = jest.fn();
	render(<Counter value={value} onChange={onChange} />);
	click(screen.getAllByRole('button')[1]);
	expect(onChange).toBeCalledWith(value + 1);
});

test('decrement button calls onChange callback with decremented value', () => {
	const value = 4;
	const onChange = jest.fn();
	render(<Counter value={value} onChange={onChange} />);
	click(screen.getAllByRole('button')[0]);
	expect(onChange).toBeCalledWith(value - 1);
});
