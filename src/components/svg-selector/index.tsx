import { FC } from "react";
import {
	Menu,
	DarkMode,
	LightMode,
	NotificationsNone,
	Search,
	CottageOutlined,
	ChevronLeftOutlined,
	ChevronRightOutlined,
	TimelineOutlined,
	MenuBookOutlined,
	SettingsOutlined,
	LogoutOutlined,
} from "@mui/icons-material";

interface PropsTypes {
	icon: string;
}

export const SvgSelector: FC<PropsTypes> = ({ icon }: PropsTypes): JSX.Element | null => {
	switch (icon) {
		case "menu":
			return <Menu />;

		case "dark":
			return <DarkMode />;

		case "ligth":
			return <LightMode />;

		case "notification":
			return <NotificationsNone />;

		case "search":
			return <Search />;

		case "home":
			return <CottageOutlined />;

		case "chevron-left":
			return <ChevronLeftOutlined />;

		case "chevron-right":
			return <ChevronRightOutlined />;

		case "graph":
			return <TimelineOutlined />;

		case "news":
			return <MenuBookOutlined />;

		case "settings":
			return <SettingsOutlined />;

		case "logout":
			return <LogoutOutlined />;

		default:
			return null;
	}
};