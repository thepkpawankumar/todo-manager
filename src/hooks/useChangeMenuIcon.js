import { useMediaQuery } from "@material-ui/core";
import { MoreVert, MoreHoriz } from "@material-ui/icons";

export default function useChangeMenuIcon() {
  const Icon = () =>
    useMediaQuery("(max-width: 768px)") ? <MoreVert /> : <MoreHoriz />;
  return Icon;
}
