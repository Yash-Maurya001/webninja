function NavBar() {
	return (
		<>
			<div className="w-full flex justify-center p-2  bg-blue-300">
				<nav className=" pl-[70px] flex gap-4 list-none font-mono font-semibold text-xl cursor-pointer">
					<li>Home</li>
					<li>About</li>
					<li>Community</li>
				</nav>
			</div>
		</>
	)
}

export default NavBar
