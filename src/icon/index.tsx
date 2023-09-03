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
import Google from "./assets/google";

const iconComponents = {
  BookOpen,
  Crown,
  FileText,
  Github,
  Google,
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
