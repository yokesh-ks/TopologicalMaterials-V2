import { Microscope, Users, Crown, PackageSearch } from "lucide-react";
import Github from "./assets/github";
import Spinner from "./assets/spinner";

const iconComponents = {
  Microscope,
  Users,
  Crown,
  PackageSearch,
  Github,
  Spinner,
};

export const Icon = (props) => {
  const IconComponent = iconComponents[props.name];

  if (IconComponent) {
    return (
      <div className="flex justify-center">
        <IconComponent {...props} />
      </div>
    );
  }
  return null;
};
