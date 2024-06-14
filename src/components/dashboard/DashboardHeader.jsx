// import UserMenu from "../../components/DropdownProfile";
import UserMenu from "../dashboard/DropdownProfile";

function Header() {
	return (
		<header className="sticky top-0 bg-white dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700 z-30">
			<div className="px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-end h-16 -mb-px">
						<UserMenu align="right" />
				</div>
			</div>
		</header>
	);
}

export default Header;