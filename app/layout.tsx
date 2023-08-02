export const metadata = {
	title: 'Flexibble',
	description: 'Flexibble'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}
