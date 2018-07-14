import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({adapter: new Adapter()})
import jest from 'jest';

import Calendar from './calendar';

describe('Calendar component', () => {

	test(
		'render',
		() => {
			expect(
				shallow(
					<Calendar />
				)
					.find('.calendar')
			)
				.toHaveLength(1)
		}
	);

	test(
		'display the first row',
		() => {
			expect(
				shallow(
					<Calendar/>
				)
					.find('.calendar__firstRow')
			)
				.toHaveLength(1)
		}
	);


	test(
		'display the correct month name',
		() => {
			expect(
				shallow(
					<Calendar dateToUse="13/12/2017" />
				)
					.find('.calendar__month').text()
			)
				.toEqual('December')
		}
	);

	test(
		'display the correct year number',
		() => {
			expect(
				shallow(
					<Calendar dateToUse="13/12/2017" />
				)
					.find('.calendar__year').text()
			)
				.toEqual('2017')
		}
	);

	test(
		'display the second row',
		() => {
			expect(
				shallow(
					<Calendar/>
				)
					.find('.calendar__secondRow')
			)
				.toHaveLength(1)
		}
	);

	test(
		'display the third row',
		() => {
			expect(
				shallow(
					<Calendar/>
				)
					.find('.calendar__thirdRow')
			)
				.toHaveLength(1)
		}
	);

	test(
		'display the correct number of days',
		() => {
			expect(
					shallow(
						<Calendar dateToUse="13/06/2017"/>
				)
					.find('.calendar__day')
			)
				.toHaveLength(29)
		}
	);

	test(
		'hightlight the current day',
		() => {
			expect(
					shallow(
						<Calendar dateToUse="13/06/2017"/>
				)
					.find('.calendar__day--current')
					.text()
			)
				.toEqual('13')
		}
	);

	test(
		'place the first day of the month in the correct day name',
		() => {
			expect(
					shallow(
						<Calendar dateToUse="14/07/2017"/>
				)
					.find('.calendar__thirdRow ul li')
					.at(6)
					.text()
			)
				.toEqual('1')

		}
	);

});

