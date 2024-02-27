import TrafficLight from './TrafficLight';
import { render, screen } from '@testing-library/react';

it('displays provided label', () => {
	const testLabel = 'test label';
	render(<TrafficLight state={{ value: 0, label: testLabel }} />);
	expect(screen.getByText(testLabel)).toBeInTheDocument();
});

/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
it('changes light color based on provided value', () => {
	const { container, rerender } = render(<TrafficLight state={{ value: 0, label: 'label' }} />);
	expect(container.querySelector('.light.red')).toBeInTheDocument();

	const testCases = [
		{ value: 1, selector: '.light.yellow' },
		{ value: 2, selector: '.light.green' },
		{ value: 3, selector: '.light.red' },
		{ value: 4, selector: '.light.yellow' },
		{ value: 5, selector: '.light.green' },
		{ value: -1, selector: '.light.yellow' },
		{ value: -2, selector: '.light.green' },
		{ value: -3, selector: '.light.red' },
	];

	for (const testCase of testCases) {
		rerender(<TrafficLight state={{ value: testCase.value, label: 'label' }} />);
		expect(container.querySelector(testCase.selector)).toBeInTheDocument();
	}
});
