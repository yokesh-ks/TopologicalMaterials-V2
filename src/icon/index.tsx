import {
  Microscope,
  Users,
  Crown,
  PackageSearch,
  FileText,
  BookOpen,
  MessageCircle,
} from "lucide-react";
import Github from "./assets/github";
import Spinner from "./assets/spinner";

const iconComponents = {
  BookOpen,
  Crown,
  FileText,
  Github,
  Microscope,
  PackageSearch,
  Spinner,
  Users,
  MessageCircle,
};

export const Icon = (props) => {
  const IconComponent = iconComponents[props.name];

  if (IconComponent) {
    return (
      <div className="flex">
        <IconComponent {...props} />
      </div>
    );
  }
  return null;
};
