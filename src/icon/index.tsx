import {
  Microscope,
  Users,
  Crown,
  PackageSearch,
  FileText,
  BookOpen,
  MessageCircle,
  X,
  ChevronLeft,
  ChevronsLeft,
  ChevronRight,
  ChevronsRight,
  ArrowDown,
  ArrowUp,
  EyeOff,
  MoreHorizontal,
} from "lucide-react";
import Github from "./assets/github";
import Spinner from "./assets/spinner";
import Google from "./assets/google";
import CaretSort from "./assets/caret-sort"
import MixerHorizontal from "./assets/mixer-horizontal"

const iconComponents = {
  ArrowDown,
  ArrowUp,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Crown,
  FileText,
  Github,
  Google,
  MessageCircle,
  Microscope,
  PackageSearch,
  Spinner,
  Users,
  X,
  EyeOff,
  CaretSort,
  MoreHorizontal,
  MixerHorizontal,
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
