import { View, Text } from 'react-native';
import React, { createContext } from 'react';

export const Data = createContext();

const DataProvider = ({ children }) => {
	const data = [
		{
			id: 0,
			name: 'tiệm trà một nắng',
			banner: 'url1',
			address: '32 Ngô Quyền, Quận 12, tp Hồ Chí Minh',
			isOpen: true,
			products: [
				{ productId: 0, productName: 'Cafe đen', price: 25000 },
				{ productId: 1, productName: 'Cafe sữa', price: 30000 },
				{ productId: 2, productName: 'Cafe caramen', price: 32000 },
				{ productId: 3, productName: 'Cafe mocha', price: 35000 },
				{ productId: 4, productName: 'Cafe latte', price: 30000 },
				{ productId: 5, productName: 'Cappuccino', price: 28000 },
				{ productId: 6, productName: 'Espresso', price: 27000 },
			],
		},
		{
			id: 1,
			name: 'tiệm trà hai mây',
			banner: 'url2',
			address: '45 Lê Lợi, Quận 1, tp Hồ Chí Minh',
			isOpen: false,
			products: [
				{ productId: 7, productName: 'Cafe đen', price: 26000 },
				{ productId: 8, productName: 'Cafe sữa', price: 31000 },
				{ productId: 9, productName: 'Cafe caramen', price: 33000 },
				{ productId: 10, productName: 'Cafe mocha', price: 36000 },
				{ productId: 11, productName: 'Cafe latte', price: 31000 },
				{ productId: 12, productName: 'Cappuccino', price: 29000 },
				{ productId: 13, productName: 'Espresso', price: 28000 },
			],
		},
		// Tiệm trà 3 đến 7
		{
			id: 2,
			name: 'tiệm trà ba gió',
			banner: 'url3',
			address: '78 Trần Hưng Đạo, Quận 3, tp Hồ Chí Minh',
			isOpen: true,
			products: [
				{ productId: 14, productName: 'Cafe đen', price: 25500 },
				{ productId: 15, productName: 'Cafe sữa', price: 30500 },
				{ productId: 16, productName: 'Cafe caramen', price: 32500 },
				{ productId: 17, productName: 'Cafe mocha', price: 35500 },
				{ productId: 18, productName: 'Cafe latte', price: 30500 },
				{ productId: 19, productName: 'Cappuccino', price: 28500 },
				{ productId: 20, productName: 'Espresso', price: 27500 },
			],
		},
		{
			id: 3,
			name: 'tiệm trà bốn mùa',
			banner: 'url4',
			address: '12 Đống Đa, Quận 5, tp Hồ Chí Minh',
			isOpen: false,
			products: [
				{ productId: 21, productName: 'Cafe đen', price: 26500 },
				{ productId: 22, productName: 'Cafe sữa', price: 31500 },
				{ productId: 23, productName: 'Cafe caramen', price: 33500 },
				{ productId: 24, productName: 'Cafe mocha', price: 36500 },
				{ productId: 25, productName: 'Cafe latte', price: 31500 },
				{ productId: 26, productName: 'Cappuccino', price: 29500 },
				{ productId: 27, productName: 'Espresso', price: 28500 },
			],
		},
		{
			id: 4,
			name: 'tiệm trà năm sao',
			banner: 'url5',
			address: '60 Nguyễn Du, Quận 8, tp Hồ Chí Minh',
			isOpen: true,
			products: [
				{ productId: 28, productName: 'Cafe đen', price: 25500 },
				{ productId: 29, productName: 'Cafe sữa', price: 30500 },
				{ productId: 30, productName: 'Cafe caramen', price: 32500 },
				{ productId: 31, productName: 'Cafe mocha', price: 35500 },
				{ productId: 32, productName: 'Cafe latte', price: 30500 },
				{ productId: 33, productName: 'Cappuccino', price: 28500 },
				{ productId: 34, productName: 'Espresso', price: 27500 },
			],
		},
		{
			id: 5,
			name: 'tiệm trà sáu nguyệt',
			banner: 'url6',
			address: '23 Cách Mạng Tháng Tám, Quận 10, tp Hồ Chí Minh',
			isOpen: false,
			products: [
				{ productId: 35, productName: 'Cafe đen', price: 24500 },
				{ productId: 36, productName: 'Cafe sữa', price: 29500 },
				{ productId: 37, productName: 'Cafe caramen', price: 31500 },
				{ productId: 38, productName: 'Cafe mocha', price: 34500 },
				{ productId: 39, productName: 'Cafe latte', price: 29500 },
				{ productId: 40, productName: 'Cappuccino', price: 27500 },
				{ productId: 41, productName: 'Espresso', price: 26500 },
			],
		},
		{
			id: 6,
			name: 'tiệm trà bảy màu',
			banner: 'url7',
			address: '88 Phan Kế Bính, Quận 7, tp Hồ Chí Minh',
			isOpen: true,
			products: [
				{ productId: 42, productName: 'Cafe đen', price: 24800 },
				{ productId: 43, productName: 'Cafe sữa', price: 29800 },
				{ productId: 44, productName: 'Cafe caramen', price: 31800 },
				{ productId: 45, productName: 'Cafe mocha', price: 34800 },
				{ productId: 46, productName: 'Cafe latte', price: 29800 },
				{ productId: 47, productName: 'Cappuccino', price: 27800 },
				{ productId: 48, productName: 'Espresso', price: 26800 },
			],
		},
	];

	return <Data.Provider value={data}>{children}</Data.Provider>;
};

export default DataProvider;
